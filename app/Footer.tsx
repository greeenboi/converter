import Image from 'next/image'
import React from 'react'
import Logo from '@/public/videx.svg'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className=' z-20 relative nav w-screen h-20 py-36 px-24 border-t border-[#c4ccff] bg-white bg-opacity-15 flex flex-row items-center justify-evenly  text-[#080461] font-Josefin font-normal text-lg'>
        <Image src={Logo} className='w-auto h-10' alt="logo" width={100} height={100} />
        <div className='flex flex-col gap-2 items-start'>
            <Link href='/Convert'>
                <p className=' font-Josefin font-normal text-lg text-[#0c23b3] mb-2'>
                    Services
                </p>
            </Link>
            <Link href='/Convert/Mp4-to-Gif'><Button className=' font-Josefin font-light text-base text-gray-600 ' variant='link'>MP4 to Gif</Button></Link>
            <Link href='/Convert/Mp4-to-Mp3'><Button className=' font-Josefin font-light text-base text-gray-600 ' variant='link'>MP4 to MP3</Button></Link>
        </div>
        <div className='flex flex-col gap-2 items-start'>
            <Link href='/Convert'>
                <p className=' font-Josefin font-normal text-lg text-[#0c23b3] mb-2'>
                    Social
                </p>
            </Link>
            <Button onClick={() => window.open('https://www.linkedin.com/in/suvan-gowri-shanker-596943261/')} className=' font-Josefin font-light text-base text-gray-600 ' variant='link'>Linkedin</Button>
            <Button onClick={() => window.open('https://github.com/greeenboi')} className=' font-Josefin font-light text-base text-gray-600 ' variant='link'>Github  </Button>
            <Button onClick={() => window.open('https://www.instagram.com/suvangs/')} className=' font-Josefin font-light text-base text-gray-600 text-center ' variant='link'>Instagram</Button>
        </div>
    </footer>
  )
}

export default Footer