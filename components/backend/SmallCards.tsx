// import this Smallcards to the Dashboard page in the backend with curry braket =>(backend).
import React from 'react'
import SmallCard from './SmallCard';
import { CheckCheck, Loader2Icon, LucideLoader, ShoppingCart } from 'lucide-react';

export default function SmallCards() {

    const orderStatus = [
        {
            title: "Total Orders",
            number: 552,
            iconBg: "bg-green-600",
            icon: ShoppingCart
        },
        {
            title: "Orders Pending",
            number: 185,
            iconBg: "bg-orange-600",
            icon: Loader2Icon
        },
        {
            title: "Oders Processing",
            number: 45,
            iconBg: "bg-blue-600",
            icon: LucideLoader
        },
        {
            title: "Oders Delivered",
            number: 306,
            iconBg: "bg-purple-600",
            icon: CheckCheck
        }     
];
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
    {/* Card */}
    {
        orderStatus.map((data,i) =>{
            return (
                                
                <SmallCard  data={data} key={i}/>
            )
        })
    }       
</div>
  )
}
