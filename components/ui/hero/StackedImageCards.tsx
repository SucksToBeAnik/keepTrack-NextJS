"use client";
import { useState } from "react";
import ImageCard from "./ImageCard";

const StackedImageCards = () => {
  const [isHovered, setIsHovered] = useState(false);
  const hoveredStyleOne = "translate-y-[80px] translate-x-[40px] md:translate-x-[160px]";
  const hoveredStyleTwo = "-translate-y-[80px] -translate-x-[40px] md:-translate-x-[160px]"


  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="stack cursor-pointer"
    >
      <ImageCard
        extraClassName={`${isHovered && hoveredStyleOne}`}
        imageSource="/projects/project-03.jpg"
      />

      <ImageCard  extraClassName={`${isHovered && hoveredStyleTwo}`} imageSource="/projects/project-02.jpg" />

      <ImageCard imageSource="/projects/project-01.jpg" />
    </div>
  );
};

export default StackedImageCards;
