// the Large card will be used here in the cards and import the Large cards to the Dashboard page in the backend with curry brakets (backend).

import LargeCard from './LargeCard'

export default function LargeCards() {

    const orderStates = [
        {
            period: "Today Orders",
            sales: 110000,
            color: "bg-green-600"
        },
        {
            period: "Yesterday Orders",
            sales: 130000,
            color: "bg-orange-600"
        },
        {
            period: "This Month",
            sales: 300000,
            color: "bg-blue-600"
        },
        {
            period: "All-Time Sales",
            sales: 5000000,
            color: "bg-purple-600"
        }     
];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
        {/* Card */}
        {
            orderStates.map((item,i) =>{
                return (
                                    
                    <LargeCard className="bg-green-600" data={item} key={i}/>
                )
            })
        }       
    </div>
  )
}


// import LargeCard from './LargeCard';

// export default function LargeCards() {
//     const orderStates = [
//         {
//             period: "Today Orders",
//             sales: 110000,
//             color: "bg-green-600",
//         },
//         {
//             period: "Yesterday Orders",
//             sales: 130000,
//             color: "bg-orange-600",
//         },
//         {
//             period: "This Month",
//             sales: 300000,
//             color: "bg-blue-600",
//         },
//         {
//             period: "Last Month",
//             sales: 5000000,
//             color: "bg-green-600",
//         },
//         {
//             period: "All-Time Sales",
//             sales: 110000,
//             color: "bg-purple-600",
//         },
//     ];

//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
//             {orderStates.map((item, i) => (
//                 <LargeCard key={i} className={item.color} item={item} />
//             ))}
//         </div>
//     );
// }






