import React from "react";

interface AboutUsImageProps {
  alt: string;
}

const AboutUsImage: React.FC<AboutUsImageProps> = ({ alt }) => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div
        className="flex h-64 w-full items-center justify-center rounded-lg bg-gray-200 text-gray-400 md:h-96 lg:h-[500px]"
        aria-label={alt}
      >
        [Image Placeholder]
      </div>
    </div>
  );
};

export default AboutUsImage;
