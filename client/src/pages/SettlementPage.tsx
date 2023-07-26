import logo from "./logo.svg"
import { useState } from "react";
import {Grid, collapseClasses, FormControl, FormLabel,RadioGroup, FormControlLabel, Radio, Button, TextField, Box} from '@mui/material';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js"

import { Radar } from "react-chartjs-2"
// import "chartjs-plugin-dragdata"    // must import this 

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
)


function SettlementPage() {
  const data = {
    responsive: false,
    maintainAspectRatio: true,
    labels: ["a","a","a","a","a","a","a","a","a","a"],
    // pointHitRadius: 10,
    datasets: [
      {
        data: [1,2,5,4,1,2,6,8,5,4],
        // fill: true,
        backgroundColor: "#215489",
        pointBackgroundColor: "#125896",
        borderColor: "#584832",
        lineTension: 0.5,
        
      },
    ]
  }

  const option = {
    // plugins: {
    //   legend: {
    //     display: false,
    //     labels: {
    //         // fontColor: "blue",
    //       fontSize: 0
    //     }
    //   },
    //   datalabels: {
    //     display: false,
    //       // color: "white"
    //   }
    // },
    scales: {
      r: {
        beginAtZero: true,
        gridLines: 
        {   
          display: false,
          color: "white",
          // lineWidth: 3
        },
        angleLines: {
          color: "#000000"
        },
        pointLabels: {
          // display: true,
          font: {
              // size: 30
              size: 0
          }
        },
        grid: {
          color: "#000000",
          circular: true,
        },
        ticks: {
          display: false,
          // color: "#555555",
        },
        suggestedMin: -100,
        suggestedMax: 30,
        stepSize: 1,
      },
    },
    elements: {
      point: {
        radius: 1, // 結果的角度圓點大小
      },
      line: {
        borderWidth: 2, //結果線的寬度
      },
    }
  }
  return (
    <>
      <Radar data={data} options={option}/>
    </>
  )
}

export default SettlementPage
