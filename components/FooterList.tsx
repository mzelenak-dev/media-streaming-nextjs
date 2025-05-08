import Image, { StaticImageData } from 'next/image';
import Link from 'next/link'
import React from 'react'

type FooterListProps = {
  list: {
    text: string;
    href: string;
    logo?: StaticImageData
  }[]
  isLast?: boolean
};

const FooterList = ({list, isLast}: FooterListProps) => {
  const listItems = list.map((listItem, index: number) => (
    <li key={index * (Math.random() * 1000)} className={`${index === 0 ? 'text-white font-bold' : ''} text-med-grey`}>
      {listItem.logo ? (
        <Link href={listItem.href} target="_blank">
          <Image
            src={listItem.logo}
            alt={listItem.text}
            width={24}
            height={24}
            className='bg-black-10 rounded-[8x]'
          />
        </Link>
      ) : (
        <Link href={listItem.href} target="_blank">
          {listItem.text}
        </Link>
      )}
    </li>
  ));
  return (
    <ul className={`flex ${isLast ? 'flex-row' : 'flex-col'} gap-[14px]`}>
      {listItems}
    </ul>
  )
}

export default FooterList