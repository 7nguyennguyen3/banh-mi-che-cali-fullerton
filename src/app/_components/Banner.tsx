import React from "react";

interface BannerProps {
  imgSrc: string;
  pageTitle: string;
}

const Banner = ({ imgSrc, pageTitle }: BannerProps) => {
  return (
    <div className="relative w-full h-[450px] md:h-[600px] xl:h-[800px]">
      <img
        src={imgSrc}
        alt={pageTitle}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">{pageTitle}</h1>
      </div>
    </div>
  );
};

export default Banner;
