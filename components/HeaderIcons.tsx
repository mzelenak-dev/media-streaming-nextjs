import React from 'react';
import Link from 'next/link';
import { Bell } from 'lucide-react';
import { Search } from 'lucide-react';

const HeaderIcons = () => {
  return (
    <nav aria-label='user utilitites' className='flex gap-[30px]'>
      <Link href="/search" aria-label='Search'>
        <Search className='w-[34px] h-[34px]' />
      </Link>
      <Link href="/notifications" aria-label='Notifications'>
        <Bell className='w-5 h-5' />
      </Link>
    </nav>
  )
}

export default HeaderIcons