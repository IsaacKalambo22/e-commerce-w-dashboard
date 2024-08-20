//import this card to the Large cards to be used there

import { Layers } from 'lucide-react'

export default function LargeCard({data}: any) {
  return (
    <div className={`rounded-lg text-white shadow-md p-8 flex items-center flex-col first-letter:gap-2 ${data.color}`}>
        <Layers/>
        <h4>{data.period}</h4>
        <h2 className='lg:text-3xl text-2xl'>MK.{data.sales}k</h2>
    </div>
  )
}
               //Or using props

// import { Layers } from 'lucide-react';

// interface LargeCardProps {
//     className: string;
//     item: {
//         period: string;
//         sales: number;
//     };
// }

// export default function LargeCard({ className, item }: LargeCardProps) {
//     return (
//         <div className={`rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-2 ${className}`}>
//             <Layers />
//             <h4>{item.period}</h4>
//             <h2 className="lg:text-3xl text-2xl">{item.sales}</h2>
//         </div>
//     );
// }






