"use client";
import { Chart } from "chart.js/auto";
import { useRef, useEffect } from "react";
const DoughnutChart = ({ type, className,label, legendtoggle,data}) => {
  const chartRef = useRef(null);
  console.log(data,label)
   useEffect(() => {
     if (chartRef.current) {
       if (chartRef.current.chart) {
         chartRef.current.chart.destroy();
       }
       const context = chartRef.current.getContext("2d");
       let delayed;
       const newChart = new Chart(context, {
         type: type,
         data: {
           labels: label,
           datasets: [
             {
               label: "Info",
               data: data,
               backgroundColor: [
                 "rgb(173, 216, 230)",
                 "rgb(135, 206, 250)", // Light Green
                 "rgb(211, 211, 211)", // Light Blue
                 "rgb(240, 240, 240)", // Light Yellow
                 "rgb(224, 247, 255)", // Light Purple
               ],
               borderColor: [
                 "rgb(25, 25, 112)", // Red
                 "rgb(70, 130, 180)", // Green
                 "rgb(105, 105, 105)", // Blue
                 "rgb(54, 69, 79)", // Yellow
                 "rgb(0, 0, 0)",
               ],
               borderWidth: 1,
             },
           ],
         },
         options: {
           animation: {
             onComplete: () => {
               delayed = true;
             },
             delay: (context) => {
               let delay = 0;
               if (
                 context.type === "data" &&
                 context.mode === "default" &&
                 !delayed
               ) {
                 delay = context.dataIndex * 300 + context.datasetIndex * 100;
               }
               return delay;
             },
           },
           responsive: true,
           plugins: {
             legend: {
               position: "top",
               display: legendtoggle || false,
             },
           },
         },
       });
       chartRef.current.chart = newChart;
     }
   }, []);
  return (
    <div className={className}>
      <canvas ref={chartRef} className="w-full h-full" />
    </div>
  );
};

export default DoughnutChart;
