import React from 'react';
import Link from "next/link";
import { Play } from 'lucide-react';

const Hero = () => {
  return (
     <>
      <section className="hero-image flex flex-col gap-[30px]">
        <h1 className='text-5xl font-bold'>The Best Streaming Experience</h1>
        <p>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
        <div className="">
          <Play />
          <Link href="" className="">Start Watching Now</Link>
        </div>
      </section>
     </>
  )
}

export default Hero