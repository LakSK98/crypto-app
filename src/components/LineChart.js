import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

//component for view of line chart
const LineChart = ({chartData,textTitle}) => {
  return (
    <Line
        data={chartData} 
        options={{
            plugins:{
                title:{
                    display:true,
                    text:textTitle
                },
                legend:{
                    display:true,
                    position:'bottom'
                }
            }
        }} 
    />
  )
}

export default LineChart;