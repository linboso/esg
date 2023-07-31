import logo from "./logo.svg"
import { useCallback, useEffect, useState } from "react";
import {Grid, Box, Card, Paper, Typography} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../app/hooks';

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
import { SumCarbonVolume } from "../slice/womSlice";
import { useLocation } from "react-router-dom";
import { useRequestProcessor } from "../hooks/useRequestProcessor";
import { getData } from "../api/index";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
)


function Sider() {
  const [fontSize, setFontSize] = useState(150);
  const [text, setText] = useState("20");
  const weight: number[] = [5.25, 85.82, 18.08, 40.83, 173.53, 70, 16.8, 0, 54.67, 38.86];
  const state = useAppSelector(state => state.wayOfMoving);
  const dispatch = useAppDispatch();
  const { query } = useRequestProcessor()

  const {
    data: chartData,
    isLoading,
    isError,
  } = query("getData", () => getData(), {
    enabled: true,
  })

  const dot = (a: number[], b: number[]) => a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n).toFixed();  

  const avg = chartData ? dot(chartData.res, weight) : null;
  const firstPage = useLocation().pathname  === "/" ? true : false;
  const finalPage = useLocation().pathname  === "/page4" ? true : false;


  useEffect(() => {
    dispatch(SumCarbonVolume());
    updateFontSize(String(Math.floor(state.sum.CarbonVolume)));

  },[state])

  const updateFontSize = useCallback(
    (value:string) => {
      let _text = String(text);
      if (_text.length > value.length) {
        const textSize = Math.ceil(fontSize * 1.5);
        fontSize < 200 && setFontSize(textSize);

      } else if (_text.length < value.length) {
        const textSize = Math.ceil(fontSize / 1.5);
        fontSize > 50 && setFontSize(textSize);
      }
      setText(value);
      // console.log(fontSize);
    },
    [fontSize, text]
  );

  return (
    <>
      <Box sx={{
        // backgroundColor: "#15c924",
        display: "flex",
        // height: "100%",
        padding: 7,
        flexDirection: "column",
      }}>
        <Paper
          elevation={4}  
          sx={{
            // backgroundColor: "#254874",
            width: 540,
            height: 520,
            display: "flex",
            flexDirection: "column",
        }}>
          {finalPage? 
            <Typography variant="h6" fontWeight="bold" mt={3} ml={3}>Comparison Eemissions ppkg</Typography>
            :
            <Typography variant="h6" fontWeight="bold" mt={3} ml={3}>Your Carbon Footprint</Typography>
          }
           <Box 
            sx={{
              width: "80%",
              height: "80%",
              // backgroundColor: "#48db74",
              alignSelf: "center",
              justifySelf: "center",
              display: "absolute",
              margin: 5
            }}>
              {finalPage ?
              <>
                <Typography variant="h1" fontWeight="bold" 
                  sx={{
                    height: "20%",
                    marginLeft: "11%",
                    marginTop: "20%",
                    color: "#474747",
                    // backgroundColor: "#1657cf"
                    }} >
                  {text} 
                </Typography>
                <Typography variant="h3" fontWeight="bold" 
                  sx={{
                    // backgroundColor: "#ae21bb", 
                    // color: "#474747",
                    height: "20%",
                    marginLeft: "60%", 
                    marginTop: "-9%",
                  }}>
                    /
                </Typography>
                <Typography variant="h3" fontWeight="bold" 
                  sx={{
                    // backgroundColor: "#d018e0", 
                    color: "#4C72D2",
                    height: "20%",
                    marginLeft: "64%", 
                    marginTop: "-18%",
                  }}>
                    {avg}  
                </Typography>
                
              </> 
              :
              firstPage? 
                <img src="../../pubilc/hall.png" style={{
                  alignSelf: "flex-end",
                  height: "90%",
                  padding: 20,
                  marginTop: -20
                }}/>  
              
              :
              <>
                <Typography fontSize={fontSize} fontWeight="bold" sx={{
                    textJustify:"center", 
                    textAlign:"center",
                    // backgroundColor: "#c918da", 
                    height: '100%',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                  }}>
                  {text}  <span style={{fontSize: 40, marginLeft: 3}}>g/min</span>
                </Typography>
                
              </>
              }
           </Box>
        </Paper>
      </Box>
    </>
  )
}

export default Sider

