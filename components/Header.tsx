import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'
import HeaderIcons from './HeaderIcons'
import logo from '@/public/logo.png'

const Header = () => {
  return (
    <header className='flex flex-row justify-between items-center px-[5%] py-[20px]'>
      <Image src={logo} alt="StreamVibe app logo" />
      <Navbar />
      <HeaderIcons />
    </header>
  )
}

export default Header