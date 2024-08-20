"use client"
// this chart is being use in the dashboard chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsChart() {

  const data = {
        labels: ['Cabbage', 'Watermelon', 'Broccoli', 'Maize'],
        datasets: [
          {
            label: '# of Votes',
            data: [15, 15, 15, 15],
            backgroundColor: [
              'rgba(0, 0, 255, 0.7)',
              'rgba(225, 0, 221, 0.7)',
              'rgba(2, 139, 71, 0.7)',
              'rgba(100, 120, 310, 0.7)',
            ],
           
            borderColor: [
              'rgba(0, 0, 255, 0.3)',
              'rgba(225, 0, 221, 0.3)',
              'rgba(2, 139, 71, 0.3)',
              'rgba(100, 120, 310, 0.3)',
            ],
            borderWidth: 1,
          },
        ],
      };


  return (

    <div className="bg-slate-700 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">
        Best Selling Charts
        </h2>
        {/* Chart */}       
            <Pie data={data} />   
    </div>
  )
}
