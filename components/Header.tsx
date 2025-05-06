import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'
import HeaderIcons from './HeaderIcons'
import logo from '@/public/logo.png'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-2 flex flex-row justify-between items-center px-[8.43%] py-[20px]'>
      <Image src={logo} alt="StreamVibe logo" />
      <Navbar />
      <HeaderIcons />
    </header>
  )
}

export default Header