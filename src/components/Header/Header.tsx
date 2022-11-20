import Image from 'next/image'
import React from 'react'
import HeaderItems from './HeaderItems'

import { 
  CheckIcon,
  BookmarkIcon,
  HomeIcon,
  BoltIcon,
  EyeIcon,
  UserIcon
} from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems title="HOME" Icon={HomeIcon} />
        <HeaderItems title="HOME" Icon={CheckIcon} />
        <HeaderItems title="HOME" Icon={BookmarkIcon} />
        <HeaderItems title="HOME" Icon={BoltIcon} />
        <HeaderItems title="HOME" Icon={EyeIcon} />
        <HeaderItems title="HOME" Icon={UserIcon} />
      </div>
      <Image 
        alt="logo" 
        className="object-contain"
        src="/logo.png" 
        width={200} 
        height={100} />
    </header>
  )
}

export default Header

