'use client';

import React, { useState } from 'react';
import { MoveLeft, MoveRight } from 'lucide-react';

type ContentNavigatorProps = {
  pages: number;
};

const ContentNavigator = ({ pages }: ContentNavigatorProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagesArray = Array.from({ length: pages });

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % pagesArray.length);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + pagesArray.length) % pagesArray.length);
  };

  return (
    <aside className="contentNavigator flex flex-row gap-3 justify-evenly items-center bg-black-6 rounded-[10px] p-[10px] border-1 border-black-15">
      <div className="text-white p-[14px] rounded-[10px] bg-black-10 border-1 border-black-12 cursor-pointer">
        <MoveLeft onClick={handlePrev} />
      </div>

      <div className="flex flex-row gap-1">
        {pagesArray.map((_, index) => (
          <div key={index}
            className={`h-[4px] rounded-full transition-all duration-200
              ${index === currentPage ? 'w-[24px] bg-cta-red' : 'w-[16px] bg-black-20'}`}
          />
        ))}
      </div>

      <div className="text-white p-[14px] rounded-[10px] bg-black-10 border-1 border-black-12 cursor-pointer">
        <MoveRight onClick={handleNext} />
      </div>
    </aside>
  );
};

export default ContentNavigator;