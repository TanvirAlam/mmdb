import Image from 'next/image'
import React from 'react'
import HeaderItems from './HeaderItems'

import { 
  HomeIcon,
  UserIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-left">
        <HeaderItems title="USER" Icon={UserIcon} />
        <HeaderItems title="HOME" Icon={HomeIcon} />
        <HeaderItems title="WATCH" Icon={VideoCameraIcon} />
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

