import Image, { StaticImageData } from 'next/image';
import React from 'react';

type GradientBlockProps = {
  icon: StaticImageData;
  title: string;
  text: string;
};

const GradientBlock = ({ icon, title, text }: GradientBlockProps) => {
  return (
    <div className="rounded-lg p-[50px] max-w-[512px] bg-gradient-block">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-5 items-center text-white font-bold text-[24px]">
          <div className="bg-dark-grey border border-black-12 p-[16px] rounded-lg">
            <Image
              src={icon}
              alt={title}
            />
          </div>
          {title}
        </div>
        <div className="text-med-grey text-[18px]">
          {text}
        </div>
      </div>
    </div>
  );
};

export default GradientBlock;