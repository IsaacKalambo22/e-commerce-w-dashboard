import { AlignJustify, Bell, LayoutDashboard, LogOut, Settings, Sun, User, User2Icon, X } from 'lucide-react'
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Navbar() {
  return (
    <div className=' flex items-center justify-between bg-slate-800 text-slate-50 h-20 px-8 py-8 fixed top-0 w-full left-60 z-50 pr-[20rem]'>
        {/* Icon */}
        <button>
            <AlignJustify/>
        </button>
        {/* 3 icons */}
        <div className='flex space-x-3'>
            <button>
                <Sun className='text-green-600 fill-green-600' />
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger>             
              <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg">
            <Bell className='text-green-600 fill-green-600'/>
            <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">
                20
              </div>
            </button>              
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className='px-4 py-2 pr-8 '>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className='flex items-center space-x-2'>
                   <Image 
                    src='/isaac.png' 
                    width={200} 
                    height={200} 
                    className='w-8 rounded-full'     alt='User profile'/> 
                    <div className="flex flex-col">
                      <p>Yellow Sweet Corn Stock out, </p>
                      <div className="flex items-center space-x-1">
                        <p className='py-0.5 px-3 bg-red-700 text-white rounded-full text-sm'>Stock Out</p>
                        <p>Aug 20 2024 - 11:54AM</p>
                      </div>
                    </div>
                    <div className='cursor-pointer'>
                      <X/>
                    </div>
                  </div> 
                                              
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className='flex items-center space-x-2'>
                   <Image 
                    src='/isaac.png' 
                    width={200} 
                    height={200} 
                    className='w-8 rounded-full'     alt='User profile'/> 
                    <div className="flex flex-col">
                      <p>Yellow Sweet Corn Stock out, </p>
                      <div className="flex items-center space-x-1">
                        <p className='py-0.5 px-3 bg-red-700 text-white rounded-full text-sm'>Stock Out</p>
                        <p>Aug 20 2024 - 11:54AM</p>
                      </div>
                    </div>
                    <div className='cursor-pointer'>
                      <X/>
                    </div>
                  </div> 
                                              
                </DropdownMenuItem>
                  <DropdownMenuItem>
                  <div className='flex items-center space-x-2'>
                   <Image 
                    src='/isaac.png' 
                    width={200} 
                    height={200} 
                    className='w-8 rounded-full'     alt='User profile'/> 
                    <div className="flex flex-col">
                      <p>Yellow Sweet Corn Stock out, </p>
                      <div className="flex items-center space-x-1">
                        <p className='py-0.5 px-3 bg-red-700 text-white rounded-full text-sm'>Stock Out</p>
                        <p>Aug 20 2024 - 11:54AM</p>
                      </div>
                    </div>
                    <div className='cursor-pointer'>
                      <X/>
                    </div>
                  </div> 
                                              
                </DropdownMenuItem>      
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger>             
                  <Image 
                src='/isaac.png' 
                width={200} 
                height={200} 
                className='w-10 rounded-full'  alt='User profile'/>               
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className='px-4 py-2 pr-8 '>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <button className='flex items-center space-x-2'>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span>Dashboard</span> 
                  </button>                             
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className='flex items-center space-x-2'>   
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Edit Profile</span>
                  </button>
               </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className='flex items-center space-x-2'>
                  <LogOut 
                  className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                  </button>                 
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
  )
}
