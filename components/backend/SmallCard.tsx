
export default function SmallCard({data}: any) {
    const  {
        title,
        number,
        iconBg,
        icon: Icon
    } = data;

  return (
    <div className='rounded-lg shadow-lg bg-slate-700 p-4'>
        <div className='flex space-x-4'>
            <div className={`w-12 h-12 ${iconBg} rounded-full items-center flex justify-center`}>
             <Icon/>
            </div>
            <div className=''>
              <p className='text-gray-400'>{title}</p>
              <h3 className='text-2xl font-bold'>{number}</h3>
            </div>
        </div>
        
    </div>
  )
}
