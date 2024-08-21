import Link from 'next/link'
import React from 'react'

export default function Siderbar() {
  return (
    <div className='dark:bg-slate-700 bg-white space-y-6 w-60 h-screen dark:text-slate-50 text-slate-800 p-4 fixed left-0 top-0 shadow-sm'>
        <Link href='#' className='mb-6'>
          Logo
        </Link>
        <div className="space-y-3 flex flex-col">
        <Link href='#'>Dashboard</Link>
        <Link href='#'>Catalogue</Link>
        <Link href='#'>Customers</Link>
        <Link href='#'>Markets</Link>
        <Link href='#'>Farmers</Link>
        <Link href='#'>Orders</Link>
        <Link href='#'>Staff</Link>
        <Link href='#'>Setting</Link>
        <Link href='#'>Online Store</Link>
       
        </div>
    </div>
  )
}
