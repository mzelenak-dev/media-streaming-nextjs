import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div id="start-trial-block" className='flex flex-row justify-evenly'>
        <div className='footer-trial-text'>
          <h2>Start your free trial today!</h2>
          <p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
        </div>
        <div className='footer-trial-button bg-cta-red text-white px-[18px] py-[24px]'>
          <Link href="/subscriptions">Start a Free Trial</Link>
        </div>
      </div>
      <nav></nav>
      <div id="socials"></div>
      <div id="legal"></div>
    </footer>
  )
}

export default Footer