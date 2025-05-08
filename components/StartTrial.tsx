import React from 'react'
import Link from 'next/link'

const StartTrial = () => {
  return (
    <aside id="start-trial-block" className='flex flex-row justify-between items-center m-auto w-[1596px] h-[313px] rounded-[12px] px-[80px] py-[100px] my-[150px]'>
      <div className='trial-text'>
        <h2 className='text-white font-bold text-[48px]'>Start your free trial today!</h2>
        <p className='text-med-grey text-[18px]'>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
      </div>
      <div className='trial-button bg-cta-red text-white px-[18px] py-[24px] rounded-[8px]'>
        <Link href="/subscriptions" className='text-[18px]'>Start a Free Trial</Link>
      </div>
    </aside>
  )
}

export default StartTrial