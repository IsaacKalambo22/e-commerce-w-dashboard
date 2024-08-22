"use client"
// this layout page conatins the Navbar and Sidebar in the (backend) forlder
import Navbar from '@/components/backend/Navbar'
import Sidebar from '@/components/backend/Sidebar'
import React, { useState } from 'react'

export default function Layout({children}: any) {
  const [showSidebar, setShowSideBar] = useState(false)
  return (
    <div className='flex'>
        {/* side bar */}
        <Sidebar showSidebar={showSidebar} setShowSideBar={setShowSideBar} />
        {/* lg:ml-60 ml-0 flex-grow bg-slate-100 min-h-screen */}
        <div className='w-full'>
            {/* Header */}
            <Navbar showSidebar={showSidebar} setShowSideBar={setShowSideBar} />
            <main className='ml-64 p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen mt-16'>
                {children}
            </main>
            {/* Main */}
        </div>
        {/* Main Body */}
    </div>
  )
}
