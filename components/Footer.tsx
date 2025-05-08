import React from 'react';
import StartTrial from './StartTrial';
import FooterList from './FooterList';
import { format } from 'date-fns';
import Link from 'next/link';
import FacebookLogo from '@/public/facebook.png';
import TwitterLogo from '@/public/twitter.png';
import LinkedinLogo from '@/public/linkedin.png';

const footerLists = [
  [
    {text: 'Home', href: '/'},
    {text: 'Categories', href: '/'},
    {text: 'Devices', href: '/'},
    {text: 'Pricing', href: '/'},
    {text: 'FAQ', href: '/'},
  ],
  [
    {text: 'Home', href: '/'},
    {text: 'Categories', href: '/'},
    {text: 'Devices', href: '/'},
    {text: 'Pricing', href: '/'},
    {text: 'FAQ', href: '/'},
  ],
  [
    {text: 'Movies', href: '/movies'},
    {text: 'Genres', href: '/movies'},
    {text: 'Trending', href: '/movies'},
    {text: 'New Releases', href: '/movies'},
    {text: 'Popular', href: '/movies'},
  ],
  [
    {text: 'Shows', href: '/shows'},
    {text: 'Genres', href: '/shows'},
    {text: 'Trending', href: '/shows'},
    {text: 'New Releases', href: '/shows'},
    {text: 'Popular', href: '/shows'},
  ],
  [
    {text: 'Support', href: '/support'},
    {text: 'Contact Us', href: '/support'},
  ],
  [
    {text: 'Subscriptions', href: '/subscriptions'},
    {text: 'Plans', href: '/subscriptions'},
    {text: 'Features', href: '/subscriptions'},
  ],
  [
    {text: 'Connect With Us', href: '/'},
    {text: 'Facebook', href: 'https://www.facebook.com', logo: FacebookLogo},
    {text: 'X (Formerly Twitter)', href: 'https://www.x.com', logo: TwitterLogo},
    {text: 'LinkedIn', href: 'https://www.linkedin.com', logo: LinkedinLogo},
  ],
]

const Footer = () => {
  return (
    <>
      <StartTrial />
      <footer className='bg-black pt-[100px] pb-[50px] py-[162px]'>
        <nav className='flex flex-row justify-between max-w-[1597px] m-auto'>
          {footerLists.map((footerList, index) => (
            <FooterList
              list={footerList}
              isLast={index === footerLists.length - 1}
              key={index * (Math.random() * 1000)} />
          ))}
        </nav>
        <div
          id="legal"
          className='flex flex-row justify-between mt-[25px] pt-[15px] border-t-1 border-med-grey text-med-grey max-w-[1597px] m-auto'
        >
          <div id="date">
            <p>@{format(new Date(), 'yyyy')} StreamVibe, All Rights Reserved</p>
          </div>
          <ul className='flex flex-row gap-'>
            <li className='borer-r-1 border-med-grey mr-[25px]'>
              <Link href="/terms-of-use">Terms of Use</Link>
            </li>
            <li className='borer-r-1 border-med-grey mr-[25px]'>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/Cookie Policy">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer