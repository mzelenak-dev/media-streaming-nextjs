'use client'

import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/browse', label: 'Movies & Shows' },
  { href: '/search', label: 'Search' },
  { href: '/support', label: 'Support' },
  { href: '/subscriptions', label: 'Subscriptions' },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='bg-black-6 border-4 border-black-12 rounded-[12px] p-[10px]'>
      <ul className='flex flex-row gap-[30px]'>
        {navItems.map(({ href, label }) => (
          <li key={href} className={clsx('header-nav-item', { selected: pathname === href })}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar