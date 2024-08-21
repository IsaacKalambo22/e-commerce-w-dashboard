// This is the dashboard page where cards, charts are displayed
import CustomDataTable from '@/components/backend/CustomDataTable'
import DarshboardCharts from '@/components/backend/DarshboardCharts'
import Heading from '@/components/backend/Heading'
import LargeCards from '@/components/backend/LargeCards'
import SmallCards from '@/components/backend/SmallCards'

export default function Dashboard() {
  return (
    <div>
      <Heading title="Dashboard Overview"/>

      {/* the cards both large the small cards and the charts in the components are being used here */}
      {/* Large Cards */}
      <LargeCards />
      {/* Small Cards */}
      <SmallCards/>
      {/* Charts */}
      <DarshboardCharts/>
      {/* Recent Orders Table */}
      <CustomDataTable/>
    </div>
  )
}
