"use client";

import Image from "next/image";
import { LuUser2 } from "react-icons/lu";
import { getCurrentProfileImage } from "@/utils/actions";
import { useEffect, useState } from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Avatar = () => {
  const [imageSource, setImageSource] = useState<string | null>(null);

  useEffect(() => {
    async function callGetCurrentProfileImage() {
      const image = await getCurrentProfileImage();
      setImageSource(image);
    }
    callGetCurrentProfileImage();
  }, []);

  return (
    <div>
      <SignedIn>
        {imageSource ? (
          <Image
            src={imageSource}
            height={24}
            width={24}
            alt="Profile picture"
            className="rounded-full object-cover border-orange-500"
          />
        ) : (
          <span className="loading loading-dots loading-sm"></span>
        )}
      </SignedIn>
      <SignedOut>
        <LuUser2 className="h-5 w-5" />
      </SignedOut>
    </div>
  );
};

export default Avatar;
