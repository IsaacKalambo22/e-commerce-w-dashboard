"use client"
// this chart is being use in the dashboard chart

import { useState } from "react"

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


export default function WeeklySalesChart() {

  ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
      };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


    const tabs = [
      {
        title: "Sales",
        type: 'sales',
        data: {
          labels,
          datasets: [
            {
              label: 'Sales',
              data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        }
      }, 
       {
        title: "Orders",
        type: 'orders',
        data: {
          labels,
          datasets: [
            {
              label: 'Orders',
              data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
              borderColor: 'rgb(0, 137, 132)',
              backgroundColor: 'rgba(0, 137, 132, 0.1)',
            },
          ],
        }
        }
    ]

    const [chartToDispaly, setChartToDisplay] = useState(tabs[0].type);

  return (

    <div className="bg-slate-700 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">
        Weekly Sales Chart
        </h2>
        {/* Table */} 
     
<div className=" text-sm font-medium text-center border-b text-gray-200 border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px">
        { tabs.map((tab,i)=> {
            return(
                <li className="me-2" key={i} >
                    <button  onClick={() =>setChartToDisplay(tab.type)} 
                    className={ chartToDispaly== tab.type ?  "nline-flex items-center justify-center p-4 text-orange-500 border-b-2 border-orange-500    rounded-t-lg active dark:text-orange-500 dark:border-orange-500 group" 
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg text-gray-300 hover:text-gray-50 dark:border-gray-100 dark:hover:text-gray-300" }>  
                        {tab.title}                
                        </button>
                </li>
                );
            })}
    </ul>
</div>
        {/* Content to display */}
       {tabs.map((tab,i) =>{
        if(chartToDispaly === tab.type){
            return <Line options={options} data={tab.data}  key={i}/>;
        }
        return null;
       })}        
    </div>
  )
}
