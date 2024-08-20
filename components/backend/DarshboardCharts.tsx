
import WeeklySalesChart from './WeeklySalesChart'
import BestSellingProductsChart from './BestSellingProductsChart'

export default function DarshboardCharts() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <WeeklySalesChart/>
        <BestSellingProductsChart/>
    </div>
  )
}

//    these two are being used here
// WeeklySalesChart
// BestSellingProductsChart
// then this Dashboardchart will be exported to the Dashboard page