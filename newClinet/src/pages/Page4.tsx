import logo from "./logo.svg"
import { useEffect, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {Grid, IconButton, Typography, Paper, Radio, Button, TextField, Box, Card} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getData } from "../api"

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart, Bar } from 'react-chartjs-2';
import { TotalCarbomArray } from "../slice/womSlice";
import { useRequestProcessor } from "../hooks/useRequestProcessor";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);



function Page4() {
  const state = useAppSelector(state => state.wayOfMoving);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();


  useEffect(() => {
    dispatch(TotalCarbomArray());  
  }, [state.sum.CarbonVolume]);

  const back = () => {
    navigate(-1);
  }
  
  const { query } = useRequestProcessor();

  const {
    data: chartData,
    isLoading,
    isError,
  } = query("getData", () => getData(), {
    enabled: true,
  })

  const data = {
    responsive: false,
    labels: [
      "腳踏車",
      "摩托車",
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
        // type: 'line' as const,
        label: "You daily carbon footprint",
        data: [...state.sum.CarbonArray],
        backgroundColor: "#474747",
        yAxisID: 'y',
      },
      {
        label: "Avg Carbon footprint",
        data: (chartData as any)?.res ?? [],
        backgroundColor: "#4C72D2",
        yAxisID: 'y',

      },
      {
        type: 'line' as const,
        label: "Traffic usage",
        data: chartData?.res3 ?? [...Array(10).fill(0)],
        backgroundColor: "#20d8b9",
        yAxisID: 'y2',

      }
    ],
  }

  const option = {
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        display: false,
        color: "black",
      },
    },
    scales: {
      y: {
        position: 'left',
        ticks:{
          callback: function(value:string, index:number, ticks:any) {
            return value + " g-CO2";
          }
        },
      },
      y2: {
        type: 'linear',
        position: 'right',
      },
    }
  } as const 

  return (
    <>
    <Box sx={{
        // backgroundColor: "#d9e09a",
        padding: 7, 
      }}>
        <Paper
          elevation={4}  
          sx={{
            width: 1100,
            height: 520,
            backgroundColor: "#F5F5F5",
        }}>
          <Grid container direction="column">
            <Grid item container xs={12} sx={{
              // backgroundColor: "#895134",
              flexDirection: "column"
            }}>
              <Box sx={{
                // backgroundColor: "#865497",
                paddingTop: 6,
                width: 800,
                alignSelf: "center"
              }}>
                <Chart type='bar' data={data} options={option as any}/>
              </Box>
            </Grid>
            {/* <Grid item sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              // backgroundColor: "#513497"
            }}>

              <div style={{borderWidth: 1, borderStyle: "solid", borderColor: "#505050", borderRadius: 5, width: 50, height: 30, marginTop: 32, marginRight: 16, alignSelf: "flex-end", transform: "rotate(180deg)"}}>            
                <IconButton size="large" sx={{width: 50, height: 30,}} onClick={back}> 
                  <ArrowForwardIosIcon/>
                </IconButton>
              </div>
            </Grid> */}
          </Grid>
        </Paper>
      </Box>



    </>
  )
}
// <Chart type='bar' data={data} />
export default Page4
