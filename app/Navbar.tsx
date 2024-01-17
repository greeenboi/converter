"use client";
import { useAuth } from "@clerk/nextjs";
import { Button } from '@/components/ui/button'
import Logo from '@/public/videx.svg'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Navbar = () => {

  const { isLoaded, userId, sessionId, getToken } = useAuth();

  return (
    <nav  className='z-20 relative w-screen h-20 py-4 border-b border-[#c4ccff] bg-white bg-opacity-15 flex flex-row items-center justify-between px-8 text-[#080461] font-Josefin font-normal text-lg'>
        <div className=' font-Josefin font-normal text-lg flex flex-row gap-16 items-center'>
        <Link href='/'><Image src={Logo} className='w-auto h-10' alt="logo" width={100} height={100} /></Link>
            <Link href='/'>Home</Link>
            <Link href='/Convert'> Our Services </Link>
        </div>
        <div className='flex flex-row gap-6 font-Josefin'>
            <UserButton afterSignOutUrl="/"/>
            {
              !isLoaded || !userId && (
                <>
                  <Link href='/sign-in'>
                    <Button variant='outline' className=' px-8 py-6  bg-transparent border-[#0c23b3] hover:bg-[#0c23b3] text-[#0c23b3] hover:text-white' >Log In</Button>
                  </Link>
                  <Link href='/sign-up'>
                    <Button variant='secondary' className=' px-8 py-6 bg-[#0c23b3] hover:bg-[#21295e] text-white' >Sign Up</Button>
                  </Link>
                </>
              )
            }
        </div>
    </nav>
  )
}

export default Navbar