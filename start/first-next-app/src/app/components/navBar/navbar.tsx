'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
    const pathName = usePathname();

  return (
    <div className='flex flex-row justify-between min-h-20 items-center'>
        <Link href={"/"} className='flex w-20 justify-center'>logo</Link>
        <div className='flex flex-row justify-between w-80 min-h-9'>
            <Link href={"/"} className={pathName ==='/' ? 'flex w-24 text-white justify-center p-3 rounded-md bg-sky-800':'flex text-violet-100 hover:text-sky-800 w-24 justify-center hover:bg-sky-100 rounded-md p-3'}>Home</Link>
            <Link href={"/projects"} className={pathName ==='/projects' ? 'flex w-24 text-white justify-center p-3 rounded-md bg-sky-800':'flex text-violet-100 hover:text-sky-800 w-24 justify-center hover:bg-sky-100 rounded-md p-3'}>Projects</Link>
            <Link href={"/contact"} className={pathName ==='/contact' ? 'flex w-24 text-white justify-center p-3 rounded-md bg-sky-800':'flex text-violet-100 hover:text-sky-800 w-24 justify-center hover:bg-sky-100 rounded-md p-3'}>Contact</Link>
        </div>
        <div className='flex flex-row justify-between w-64 px-5'>
            <Link href={"/login"} className={pathName ==='/login' ? 'flex w-24 text-white justify-center p-3 rounded-md bg-sky-800':'flex w-24 text-violet-100 hover:text-sky-800 justify-center hover:bg-sky-100 rounded-md p-3'}>Login</Link>
            <Link href={"/login"} className={pathName ==='/signup' ? 'flex w-24 text-white justify-center p-3 rounded-md bg-sky-800':'flex w-24 text-violet-100 hover:text-sky-800 justify-center hover:bg-sky-100 rounded-md p-3'}>Sign Up!</Link>
        </div>
    </div>
  )
}
