import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/logo.png'
import { LayoutDashboard, LayoutGrid } from 'lucide-react'

export default function Siderbar() {
  return (
    <div className='dark:bg-slate-700 bg-white space-y-6 w-64 h-screen dark:text-slate-50 text-slate-800 px-4 py-4 fixed left-0 top-0 shadow-sm'>
        <Link href='#'>
           <Image src={Logo} alt='isaaclogo' className='w-36'/>
        </Link>
        <div className="space-y-3 flex flex-col mt-14">
        <Link href='/dashboard' className='flex items-center space-x-3 px-6 py-2 border-1-4 border-green-600'>
          <LayoutGrid/>
          <span>Dashboard</span>
        </Link>
        <Link href='#'className='flex items-center space-x-3 px-6 py-2 border-1-4 border-green-600'>Catalogue</Link>
        <Link href='#' className='flex items-center space-x-3 px-6 py-2 border-1-4 border-green-600'>Customers</Link>
        <Link href='#' className='flex items-center space-x-3 px-6 py-2 border-1-4 border-green-600'>Markets</Link>
        <Link href='#' className='flex items-center space-x-3 px-6 py-2 border-1-4 border-green-600'>Farmers</Link>
        <Link href='#' className='flex items-center space-x-3 px-6 py-2 border-1-4 border-green-600'>Orders</Link>
        <Link href='#' className='flex items-center space-x-3 px-6 py-2 border-1-4 border-green-600'>Staff</Link>
        <Link href='#' className='flex items-center space-x-3 px-6 py-2 border-1-4 border-green-600'>Setting</Link>
        <Link href='#' className='flex items-center space-x-3 px-6 py-2 border-1-4 border-green-600'>Online Store</Link>
       
        </div>
    </div>
  )
}
