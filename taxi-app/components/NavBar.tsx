import Image from 'next/image'
import React from 'react'
import { UserButton } from '@clerk/nextjs'


const NavBar = () => {
  return (
    <div className=' flex justify-between items-center px-12'>
        <div className=' flex gap-8 items-center'>
            <Image src='/Logo.png' alt='Logo' width={90} height={60} />
            <div className=' hidden md:flex gap-12'>
                <h1 className=' hover:bg-slate-200 rounded-md p-2 transition-all cursor-pointer'>Home</h1>
                <h1 className=' hover:bg-slate-200 rounded-md p-2 transition-all cursor-pointer'>History</h1>
                <h1 className=' hover:bg-slate-200 rounded-md p-2 transition-all cursor-pointer'>Help</h1>
            </div>
        </div>
        <UserButton afterSignOutUrl='/' />

    </div>
  )
}

export default NavBar