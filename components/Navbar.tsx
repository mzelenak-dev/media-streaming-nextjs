'use client'

import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='bg-black-6 border-4 border-black-12 rounded-[12px] p-[10px]'>
      <ul className='flex flex-row gap-[30px]'>
        <li className={clsx('header-nav-item', { selected: pathname === '/' })}>
          <Link href="/">Home</Link>
        </li>
        <li className={clsx('header-nav-item', { selected: pathname === '/browse' })}>
          <Link href="/browse">Movies & Shows</Link>
        </li>
        <li className={clsx('header-nav-item', { selected: pathname === '/search' })}>
          <Link href="/search">Search</Link>
        </li>
        <li className={clsx('header-nav-item', { selected: pathname === '/support' })}>
          <Link href="/support">Support</Link>
        </li>
        <li className={clsx('header-nav-item', { selected: pathname === '/subscriptions' })}>
          <Link href="/subscriptions">Subscriptions</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar