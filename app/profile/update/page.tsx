"use client";

import { CiUser } from "react-icons/ci";
import FormInput from "@/components/ui/form/FormInput";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import FormHeader from "@/components/ui/form/FormHeader";
import FormTextarea from "@/components/ui/form/FormTextarea";
import FormSubmitButton from "@/components/ui/form/FormSubmitButton";
import { useFormState } from "react-dom";
import { createProfile, getUserProfile } from "@/utils/actions";
import { useEffect, useState } from "react";
import { Profile } from "@prisma/client";

const ProfileUpdatePage = () => {
  const [userProfile, setUserProfile] = useState<Profile | null>(null);
  const [formState, createProfileAction] = useFormState(createProfile, {
    message: null,
    type: null,
  });

  useEffect(() => {
    async function callGetProfile() {
      const profile = await getUserProfile();
      setUserProfile(profile);
    }
    callGetProfile();
  }, []);

  return (
    <div className="mt-36 container mx-auto max-w-5xl">
      <div className="grid grid-cols-3 min-h-[500px]">
        <div className="hidden col-span-1 w-full h-full bg-dark dark:bg-light rounded-l-md md:flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-8">
            <Image src="/avatar.png" alt="Avatar" height={300} width={300} />
            <button className="btn btn-outline btn-ghost flex justify-center items-center btn-accent shadow-md">
              <span>Create</span>
              <BsArrowRight />
            </button>
          </div>
        </div>
        <form
          action={createProfileAction}
          className="bg-white w-full md:col-span-2 col-span-3 p-8"
        >
          <FormHeader>Create Profile</FormHeader>
          <div className="space-y-4 h-full">
            <FormInput
              defaultValue={userProfile?.firstName}
              name="firstName"
              icon={<CiUser className="h-5 w-5" />}
              type="text"
              placeholder="First name"
            />
            <FormInput
              name="lastName"
              defaultValue={userProfile?.lastName}
              icon={<CiUser className="h-5 w-5" />}
              type="text"
              placeholder="Last name"
            />
            <FormInput
              name="username"
              defaultValue={userProfile?.username}
              icon={<CiUser className="h-5 w-5" />}
              type="text"
              placeholder="Username"
            />

            <FormTextarea
              defaultValue={userProfile?.bio}
              name="bio"
              placeholder="Tell us about yourself"
            />
            <FormSubmitButton title="Save" />
          </div>
        </form>
      </div>

      {formState.message && (
        <div className="toast ">
          <div className={`alert ${formState.type=== "ERROR" ? "alert-error" : "alert-success"}`}>
            <span className="text-sm text-zinc-100">{formState.message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileUpdatePage;
