// this layout page conatins the Navbar and Sidebar in the (backend) forlder
import Navbar from '@/components/backend/Navbar'
import Sidebar from '@/components/backend/Sidebar'
import React from 'react'

export default function Layout({children}: any) {
  return (
    <div className='flex'>
        {/* side bar */}
        <Sidebar/>
        <div className='w-full'>
            {/* Head */}
            <Navbar/>
            <main className='ml-60 p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen mt-16'>
                {children}
            </main>
            {/* Main */}
        </div>
        {/* Main Body */}
    </div>
  )
}
