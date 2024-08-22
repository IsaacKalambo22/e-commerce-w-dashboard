"use client"
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/isaac.png'
import { 
  Boxes,
  ChevronDown,
  ChevronRight, 
  ExternalLink,  
  LayoutGrid, 
  LayoutList, 
  LogOut, 
  Monitor, 
  ScanSearch, 
  SendToBack, 
  Settings, 
  Slack, 
  Tractor, 
  Truck, 
  User, 
  User2,   
  Warehouse 
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState } from 'react'
import { tr } from '@faker-js/faker'

export default function Sidebar({showSidebar, setShowSideBar}: any) {
  const pathname = usePathname();
  console.log("Current Path:", pathname);  // Debugging path

  const sidebarLinks = [
    {
      title: "Customers",
      icon: User2,
      href: "/dashboard/customers"
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets"
    },
    {
      title: "Farmers",
      icon: Tractor,
      href: "/dashboard/farmers"
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders"
    },
    {
      title: "Our Staff",
      icon: User,
      href: "/dashboard/staff"
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings"
    },
    {
      title: "Online Store",
      icon: ExternalLink,
      href: "/"
    },
  ];

  const catalogueLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products"
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories"
    },
    {
      title: "Attributes",
      icon: SendToBack,
      href: "/dashboard/attributes"
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons"
    },
    {
      title: "Store Sliders",
      icon: Monitor,
      href: "/dashboard/sliders"
    },
  ];

  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className={
      showSidebar
      ?'sm:block mt-20 sm:mt-0 dark:bg-slate-700 bg-white space-y-6 h-screen dark:text-slate-50 text-slate-800 px-4 py-4 left-0 fixed top-0 shadow-sm' 
      : 'hidden mt-20 sm:mt-0 sm:block dark:bg-slate-700 bg-white space-y-6 h-screen dark:text-slate-50 text-slate-800 px-4 py-4 left-0 fixed top-0 shadow-sm'}>
      <Link 
        onClick={()=> setShowSideBar(false)}
        href='/dashboard'>
        <Image src={Logo} alt='isaac logo' width={50} height={50} className='rounded-full'/>
      </Link>
      
      <div className="space-y-3 flex flex-col mt-2">
        <Link 
         onClick={()=> setShowSideBar(false)}
         href='/dashboard' 
         className={
          pathname === "/dashboard" 
            ? 'flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-500 text-lime-500' 
            : 'flex items-center space-x-3 px-6 py-2'
        }>
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        
        <Collapsible className='px-3 py-2'>
          <CollapsibleTrigger asChild onClick={()=> setOpenMenu(!openMenu)}>
            <button className='flex items-center space-x-6 py-2 px-3'>
              <div className="flex items-center space-x-3">
                <Slack />
                <span>Catalogue</span> 
              </div>
                { openMenu?  <ChevronRight /> :  <ChevronDown /> }
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className='rounded-lg px-1 py-2 bg-slate-100 dark:bg-slate-900'>
            {catalogueLinks.map((item) => {
              const Icon = item.icon;
              return (
              <Link 
                onClick={()=> setShowSideBar(false)}
                key={item.href} 
                href={item.href} 
                className={
                  pathname === item.href 
                    ? 'flex items-center space-x-3 px-6 py-1 text-sm text-lime-500' 
                    : 'flex items-center space-x-3 px-6 py-1'
                }
              >
                <Icon className='w-4 h-4' />
                <span>{item.title}</span>
              </Link>
              )            
            })} 
           
          </CollapsibleContent>
        </Collapsible>
        
        {sidebarLinks.map((item) => {
          const Icon = item.icon;
          return (
            <Link 
              onClick={()=> setShowSideBar(false)}
              key={item.href} 
              href={item.href} 
              className={
                pathname === item.href 
                  ? 'flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-500 text-lime-500' 
                  : 'flex items-center space-x-3 px-6 py-2'
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          )
        })}
        
        <div className="px-6 py-2">
          <button  
          onClick={()=> setShowSideBar(false)} className='bg-lime-600 rounded-md flex items-center space-x-3 px-6 py-3'>
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

