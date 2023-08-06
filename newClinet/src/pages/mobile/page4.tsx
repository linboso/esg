import logo from "./logo.svg"
import { useCallback, useEffect, useState } from "react"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

import {
  Grid,
  IconButton,
  Typography,
  Paper,
  Radio,
  Button,
  TextField,
  Box,
  Card,
} from "@mui/material"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { getData } from "../../api"

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
} from "chart.js"
import { Chart, Bar } from "react-chartjs-2"
import { SumCarbonVolume, TotalCarbomArray } from "../../slice/womSlice"
import { useRequestProcessor } from "../../hooks/useRequestProcessor"
import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { NumericFormat } from "react-number-format"
import { data as mockData } from "./data"

const FlexBox = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 30px;
  background: #fff;
  padding: 30px 20px;
`

const Text = styled.div`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 154.023%;
`

const FlexRow = styled.div`
  align-self: stretch;
  border-radius: 23px;
  background: #d9d9d9;
  height: 277.5px;
`

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
)

function Page4() {
  const state = useAppSelector((state) => state.wayOfMoving)
  const dispatch = useAppDispatch()
  let navigate = useNavigate()

  useEffect(() => {
    dispatch(TotalCarbomArray())
  }, [state.sum.CarbonVolume])

  const { query } = useRequestProcessor()

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
        yAxisID: "y",
      },
      {
        label: "Avg Carbon footprint",
        data: (chartData as any)?.res ?? [],
        backgroundColor: "#4C72D2",
        yAxisID: "y",
      },
      {
        type: "line" as const,
        label: "Traffic usage",
        data: (chartData as any)?.res3 ?? [...Array(10).fill(0)],
        backgroundColor: "#20d8b9",
        yAxisID: "y2",
      },
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
        position: "left",
        ticks: {
          callback: function (value: string, index: number, ticks: any) {
            return value + " g-CO2"
          },
        },
      },
      y2: {
        type: "linear",
        position: "right",
      },
    },
    maintainAspectRatio: false,
  } as const

  const [text, setText] = useState("20")
  const [fontSize, setFontSize] = useState(60)

  const dot = (a: number[], b: number[]) =>
    a
      .map((x, i) => a[i] * b[i])
      .reduce((m, n) => m + n)
      .toFixed()

  const weight: number[] = [
    5.25, 85.82, 18.08, 40.83, 173.53, 70, 16.8, 0, 54.67, 38.86,
  ]

  const avg = chartData ? dot((chartData as any).res2, weight) : null

  const updateFontSize = useCallback(
    (value: string) => {
      //   if (value.length == 5) {
      //     setFontSize(68)
      //   } else if (value.length == 4) {
      //     setFontSize(83)
      //   } else if (value.length == 3) {
      //     setFontSize(115)
      //   }
      setText(value)
    },
    [fontSize, text],
  )

  useEffect(() => {
    dispatch(SumCarbonVolume())
    updateFontSize(String(Math.floor(state.sum.CarbonVolume)))
    // updateFontSize("125");
    // setText("1230")
    // updateFontSize("10000");
  }, [state])

  return (
    <Box
      sx={{
        padding: 2,
        width: "140%",
      }}
    >
      <FlexBox>
        {/* {text !== "0" ? (
          <Text>Your Carbon Footprint Performance</Text>
        ) : (
          <Text>Comparison Emissions Kg-CO2 Average</Text>
        )} */}
        <Text>Your Carbon Footprint (Kg-CO2)</Text>
        <FlexRow>
          <div>
            <Typography
              fontSize={fontSize}
              fontWeight="bold"
              sx={{
                height: "20%",
                marginLeft: "11%",
                marginTop: "20%",
                color: "#474747",
                // color: "#4C72D2",
                // backgroundColor: "#678ed6",
                maxWidth: 250,
              }}
            >
              <NumericFormat
                value={
                  text !== "0"
                    ? (Number(text) / 1000).toFixed(1)
                    : // : (Number(avg) / 1000).toFixed(1)
                      null
                }
                thousandSeparator=","
                displayType="text"
              />
            </Typography>
          </div>
          {/* {text !== "0" && (
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                // backgroundColor: "#ae21bb",
                // color: "#474747",
                height: "20%",
                marginLeft: "70%",
                marginTop: "-9%",
              }}
            >
              /
            </Typography>
          )} */}
          {text && (
            <div>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  // backgroundColor: "#d018e0",
                  color: "#4C72D2",
                  height: "20%",
                  marginLeft: "11%",
                  // marginLeft: "76%",
                  // marginTop: "-18%",
                }}
              >
                Avg:
                <NumericFormat
                  value={(Number(avg) / 1000).toFixed(1)}
                  thousandSeparator=","
                  displayType="text"
                  style={{
                    marginLeft: "5%",
                  }}
                />
              </Typography>
            </div>
          )}
        </FlexRow>
        <Text>Result</Text>
        <FlexRow>
          {/* <div>
            <Typography
              fontSize={fontSize}
              fontWeight="bold"
              sx={{
                // // backgroundColor: "#d018e0",
                // color: "#4C72D2",
                // height: "20%",
                // marginLeft: "11%",
                // // marginLeft: "76%",
                // // marginTop: "-18%",
                height: "20%",
                marginLeft: "11%",
                marginTop: "20%",
                color: "#4C72D2",
                // color: "#4C72D2",
                // backgroundColor: "#678ed6",
                maxWidth: 250,
              }}
            >
              <NumericFormat
                value={(Number(avg) / 1000).toFixed(1)}
                thousandSeparator=","
                displayType="text"
                style={{
                  marginLeft: "5%",
                }}
              />
            </Typography>
          </div> */}
          <Chart
            type="bar"
            data={data}
            options={option as any}
            style={{ overflow: "auto", maxHeight: "500px" }}
          />
        </FlexRow>
        {/* <Box
        sx={{
          padding: 3,
        }}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Paper
          elevation={4}
          sx={{
            width: "170%",
            height: "621px",
            backgroundColor: "#F5F5F5",
            borderRadius: "30px",
          }}
        >
          <Grid container direction="column">
            <Grid
              item
              container
              xs={12}
              sx={{
                // backgroundColor: "#895134",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  // backgroundColor: "#865497",
                  paddingTop: 6,
                  width: 800,
                  alignSelf: "center",
                }}
              >
                <Chart type="bar" data={data} options={option as any} />
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                // backgroundColor: "#513497"
              }}
            >
              <div
                style={{
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "#505050",
                  borderRadius: 5,
                  width: 50,
                  height: 30,
                  marginTop: 32,
                  marginRight: 16,
                  alignSelf: "flex-end",
                  transform: "rotate(180deg)",
                }}
              >
                <IconButton
                  size="large"
                  sx={{ width: 50, height: 30 }}
                  onClick={back}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Box> */}
      </FlexBox>
    </Box>
  )
}

// <Chart type='bar' data={data} />
export default Page4
