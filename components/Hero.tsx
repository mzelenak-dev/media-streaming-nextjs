import React from 'react';
import Link from "next/link";
import { Play } from 'lucide-react';

const Hero = () => {
  return (
     <>
      <div id="hero-image" className="h-screen bg-top-left bg-cover bg-center flex items-center justify-center text-white"></div>
      <div className='flex flex-col gap-[30px] text-center -mt-[40px] mb-[500px]'>
        <h1 className='text-[58px] text-white font-bold'>The Best Streaming Experience</h1>
        <div className='w-[66%] m-auto text-[18px] leading-[150%] text-med-grey'>
          <p>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more.</p>
          <p>You can also create your own watchlists, so you can easily find the content you want to watch.</p>
        </div>
        <div className="flex flex-row gap-[5px] items-center justify-center font-bold w-[251px] h-[64px] m-auto bg-cta-red px-[24px] py-[18px] rounded-[8px] mt-[30px]">
          <Play className='fill-white' />
          <Link href="/browse" className="text-white text-[18px] stroke-none">Start Watching Now</Link>
        </div>
      </div>
     </>
  )
}

export default Hero