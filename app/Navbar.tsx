import { Button } from '@/components/ui/button'
import Logo from '@/public/videx.svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav  className='z-20 relative w-screen h-20 py-4 border-b border-[#c4ccff] bg-white bg-opacity-15 flex flex-row items-center justify-between px-8 text-[#080461] font-Josefin font-normal text-lg'>
        <div className=' font-Josefin font-normal text-lg flex flex-row gap-16 items-center'>
        <Image src={Logo} className='w-auto h-10' alt="logo" width={100} height={100} />
            <Link href='/'>Home</Link>
            <Link href='/Convert'> Our Services </Link>
        </div>
        <div className='flex flex-row gap-6 font-Josefin'>
            <Button variant='outline' className=' px-8 py-6  bg-transparent border-[#0c23b3] hover:bg-[#0c23b3] text-[#0c23b3] hover:text-white' >Log In</Button>
            <Button variant='secondary' className=' px-8 py-6 bg-[#0c23b3] hover:bg-[#21295e] text-white' >Sign Up</Button>
        </div>
    </nav>
  )
}

export default Navbar