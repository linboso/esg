import logo from "./logo.svg"
import { useCallback, useEffect, useState } from "react"
import { Grid, Box, Card, Paper, Typography } from "@mui/material"
import { useAppSelector, useAppDispatch } from "../app/hooks"
import { NumericFormat } from "react-number-format"
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
import { SumCarbonVolume } from "../slice/womSlice"
import { useLocation } from "react-router-dom"
import { useRequestProcessor } from "../hooks/useRequestProcessor"
import { getData } from "../api/index"

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
)

function Sider() {
  const [fontSize, setFontSize] = useState(200)
  const [text, setText] = useState("20")
  const weight: number[] = [
    5.25, 85.82, 18.08, 40.83, 173.53, 70, 16.8, 0, 54.67, 38.86,
  ]
  const state = useAppSelector((state) => state.wayOfMoving)
  const dispatch = useAppDispatch()
  const { query } = useRequestProcessor()

  const {
    data: chartData,
    isLoading,
    isError,
  } = query("getData", () => getData(), {
    enabled: true,
  })

  const dot = (a: number[], b: number[]) =>
    a
      .map((x, i) => a[i] * b[i])
      .reduce((m, n) => m + n)
      .toFixed()

  const avg = chartData ? dot((chartData as any).res2, weight) : null

  const firstPage = useLocation().pathname === "/" ? true : false
  const finalPage = useLocation().pathname === "/page4" ? true : false

  useEffect(() => {
    dispatch(SumCarbonVolume())
    updateFontSize(String(Math.floor(state.sum.CarbonVolume)))
    // updateFontSize("125");
    // setText("1230")
    // updateFontSize("10000");
  }, [state])

  const updateFontSize = useCallback(
    (value: string) => {
      if (value.length == 5) {
        setFontSize(68)
      } else if (value.length == 4) {
        setFontSize(83)
      } else if (value.length == 3) {
        setFontSize(115)
      }
      setText(value)
    },
    [fontSize, text],
  )

  return (
    <>
      <Box
        sx={{
          // backgroundColor: "#15c924",
          display: "flex",
          justifyContent: "center",
          // height: "100%",
          padding: 7,
          flexDirection: "column",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            // backgroundColor: "#254874",
            width: 540,
            height: 520,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {finalPage ? (
            <Typography variant="h6" fontWeight="bold" mt={3} ml={3}>
              Comparison Emissions Kg-CO2 {text === "0" ? "Average" : null}
            </Typography>
          ) : (
            <Typography variant="h6" fontWeight="bold" mt={3} ml={3}>
              Your Carbon Footprint
            </Typography>
          )}
          <Box
            sx={{
              width: "80%",
              height: "80%",
              // backgroundColor: "#48db74",
              alignSelf: "center",
              justifySelf: "center",
              display: "absolute",
              margin: 5,
            }}
          >
            {finalPage ? (
              <>
                <Typography
                  fontSize={fontSize}
                  fontWeight="bold"
                  sx={{
                    height: "20%",
                    marginLeft: "11%",
                    marginTop: "20%",
                    color: text !== "0" ? "#474747" : "#4C72D2",
                    // color: "#4C72D2",
                    // backgroundColor: "#678ed6",
                    maxWidth: 250,
                  }}
                >
                  <NumericFormat
                    value={
                      text !== "0"
                        ? (Number(text) / 1000).toFixed(1)
                        : (Number(avg) / 1000).toFixed(1)
                    }
                    thousandSeparator=","
                    displayType="text"
                  />
                </Typography>
                {text !== "0" && (
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{
                      // backgroundColor: "#ae21bb",
                      // color: "#474747",
                      height: "20%",
                      marginLeft: "60%",
                      marginTop: "-9%",
                    }}
                  >
                    /
                  </Typography>
                )}
                {text !== "0" && (
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{
                      // backgroundColor: "#d018e0",
                      color: "#4C72D2",
                      height: "20%",
                      marginLeft: "64%",
                      marginTop: "-18%",
                    }}
                  >
                    <NumericFormat
                      value={(Number(avg) / 1000).toFixed(1)}
                      thousandSeparator=","
                      displayType="text"
                    />
                    {/* 9999 */}
                  </Typography>
                )}
              </>
            ) : firstPage ? (
              <img
                src="/hall.png"
                alt="hall"
                style={{
                  alignSelf: "flex-end",
                  height: "80%",
                  width: "80%",
                  padding: 20,
                  marginTop: -20,
                }}
              />
            ) : (
              <>
                <Typography
                  fontSize={fontSize}
                  fontWeight="bold"
                  sx={{
                    textJustify: "center",
                    textAlign: "center",
                    // backgroundColor: "#c918da",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <NumericFormat
                    value={(Number(text) / 1000).toFixed(1)}
                    thousandSeparator=","
                    displayType="text"
                  />
                  {/* <NumericFormat value={Number(text)*1000} thousandSeparator="," displayType="text" /> */}
                  <span style={{ fontSize: 40, marginLeft: 3 }}>Kg-CO2</span>
                </Typography>
              </>
            )}
          </Box>
        </Paper>
      </Box>
    </>
  )
}

export default Sider
