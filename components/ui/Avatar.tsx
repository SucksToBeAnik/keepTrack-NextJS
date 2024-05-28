'use client'

import Image from "next/image";
import { LuUser2 } from "react-icons/lu";
import { getCurrentProfileImage } from "@/utils/actions";
import { useEffect, useState } from "react";

const Avatar = () => {
  const [imageSource, setImageSource] = useState<string | null>(null)

  useEffect(()=>{
    async function callGetCurrentProfileImage() {
      const image = await getCurrentProfileImage()
      setImageSource(image)
    }
    callGetCurrentProfileImage()
  },[])

  if (imageSource) {
    return (
      <Image
        src={imageSource}
        height={24}
        width={24}
        alt="Profile picture"
        className="rounded-full object-cover border-orange-500"
      />
    );
  }

  return <LuUser2 className="h-5 w-5" />;
};

export default Avatar;
