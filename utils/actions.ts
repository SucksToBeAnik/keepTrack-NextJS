"use server";

import { revalidatePath } from "next/cache";
import { db } from "./db";
import { renderError, validateWithZodSchema } from "./helpers";
import { CreateProfileSchema } from "./schemas";
import { FormState } from "./types";
import { currentUser } from "@clerk/nextjs/server";

export const getCurrentActiveUser = async () => {
  const user = await currentUser();
  return user;
};

export const getCurrentProfileImage = async () => {
  const user = await getCurrentActiveUser();

  if (user) {
    const profile = await db.profile.findUnique({
      where: {
        clerkID: user.id,
      },
      select: {
        profileImage: true,
      },
    });

    if (profile) {
      return profile.profileImage;
    } else {
      return null;
    }
  }else{
    return null
  }
};

export const createProfile = async (
  formState: FormState,
  formData: FormData
): Promise<FormState> => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(CreateProfileSchema, rawData);
    const user = await getCurrentActiveUser();

    if (!user) throw new Error("You must be logged in to access this route");

    await db.profile.create({
      data: {
        clerkID: user.id,
        profileImage: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
        ...validatedFields,
      },
    });

    revalidatePath("/");
    return {
      message: "Profile created!",
      type: "SUCCESS",
    };
  } catch (error) {
    return renderError(error);
  }
};

export const getUserProfile = async () => {
  const user = await getCurrentActiveUser();

  if (user) {
    const profile = await db.profile.findUnique({
      where: {
        clerkID: user.id,
      },
    });
    return profile;
  } else {
    return null;
  }
};
