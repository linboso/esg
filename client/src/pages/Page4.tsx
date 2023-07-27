import logo from "./logo.svg"
import { useState } from "react"
import {
  Grid,
  collapseClasses,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  TextField,
  Box,
  Card,
} from "@mui/material"

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
import { useRequestProcessor } from "../hooks/useRequestProcessor"
import { getData } from "../api"
// import "chartjs-plugin-dragdata"    // must import this

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
)

function Page4() {
  const data = {
    responsive: false,
    labels: [
      "腳踏車",
      "機車",
      "捷運",
      "輕軌",
      "汽車",
      "公車",
      "電動摩托車",
      "走路",
      "火車",
      "電動汽車",
    ],
    // pointHitRadius: 10,
    datasets: [
      {
        label: "You daily carbon footprint",
        data: [0, 0, 15, 0, 20, 0, 0, 0, 0, 0],
        backgroundColor: "#1231568F",
        pointBackgroundColor: "#125896",
        borderColor: "#584832",
        pointHoverBorderColor: "rgb(255, 99, 132)",
        // lineTension: 0.5,
      },
      {
        label: "Avg Carbon footprint",
        data: [24, 3, 5, 19, 15, 18, 10, 22, 15, 13],
        backgroundColor: "#AB20154F",
        pointBackgroundColor: "#125896",
        borderColor: "#584832",
        pointHoverBorderColor: "rgb(255, 99, 132)",
        // lineTension: 0.5,
      },
    ],
  }

  const option = {
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        display: true,
        color: "white",
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        gridLines: {
          display: true,
          color: "white",
          // lineWidth: 3
        },
        angleLines: {
          color: "#000000",
        },
        pointLabels: {
          // display: true,
          font: {
            size: 15,
          },
        },
        grid: {
          color: "#000000",
          circular: true,
        },
        ticks: {
          display: true,
          // color: "#555555",
        },
        suggestedMin: -10,
        suggestedMax: 60,
        stepSize: 1,
      },
    },
    elements: {
      point: {
        radius: 2, // 結果的角度圓點大小
      },
      line: {
        borderWidth: 2, //結果線的寬度
      },
    },
  }

  const { query } = useRequestProcessor()

  const {
    data: chartData,
    isLoading,
    isError,
  } = query("getData", () => getData(), {
    enabled: true,
  })

  console.log({chartData})

  return (
    <>
      <Grid container mt={3}>
        <Grid item xs={1}></Grid>

        <Grid item xs={3}>
          <Radar data={data} options={option} />
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              height: 100,
            }}
          ></Card>
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
    </>
  )
}

export default Page4
