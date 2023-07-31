import { useNavigate, Link } from "react-router-dom"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import {
  Grid,
  Paper,
  FormControl,
  Select,
  Button,
  Box,
  MenuItem,
  TextField,
  Typography,
  IconButton,
} from "@mui/material"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { postData } from "../api/index"
import { useMutation } from "react-query"

import SelectList from "../features/SelectList/SelectList"
import { useEffect } from "react"
import { SumCarbonVolume, updateGoHome, updateGoSchool } from "../slice/womSlice"

function Page5() {
  const state = useAppSelector((state) => state.wayOfMoving.record)
  const { Userinfo } = useAppSelector((state) => state.InfoSlice)
  const dispatch = useAppDispatch()
  const mutation = useMutation(async (payload: unknown) => {
    await postData(payload)    
  })

  let navigate = useNavigate()

  useEffect(() => {
    dispatch(updateGoHome(['rain', [...Array(10).fill(0)]]));
    dispatch(updateGoSchool(['rain', [...Array(10).fill(0)]]));
    // dispatch(SumCarbonVolume());
  }, [])


  const next = () => {
    let c:number[] = [0,0];
    for(let i=0; i< 10; i++){
      if(state.rain.goHome[i] == 0) 
        c[0]++;
      if(state.rain.goSchool[i] == 0)
        c[1]++;
    }
    if (c[0] == 10 || c[1] == 10) {
      alert("you need to fill in informace at both side!");
      return;
    }


    const payloadRainHome = state.rain.goHome
    const payloadRainSchool = state.rain.goSchool
    const payloadSunnyHome = state.sunny.goHome
    const payloadSunnySchool = state.sunny.goSchool

    // pre two are sunny case, and past two are rain case
    // @TODO - should have a erorr handling for axios call error
    mutation.mutate({
      info: Userinfo,
      data: {
        sunnyHome: payloadSunnyHome,
        sunnySchool: payloadSunnySchool,
        rainHome: payloadRainHome,
        rainSchool: payloadRainSchool,
      },
    })

    navigate("/page4");
  }

  const back = () => {
    dispatch(updateGoHome(['rain', [...Array(10).fill(0)]]));
    dispatch(updateGoSchool(['rain', [...Array(10).fill(0)]]));
    navigate("/page3");
  }

  return (
    <>
      <Box
        sx={{
          // backgroundColor: "#d9e09a",
          padding: 7,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            width: 1100,
            height: 520,
            backgroundColor: "#F5F5F5",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
            }}
          >
            <Grid item xs={12}>
              <Typography variant="h5" fontWeight="bold" mt={2} ml={2}>
                {" "}
                How do you usually commute?{" "}
              </Typography>
            </Grid>

            <Grid item container xs={6} direction="column" mt={3}>
              <Grid
                item
                xs={12}
                sx={{
                  alignSelf: "center",
                  // width: "100%",
                  // backgroundColor:"#8dd48f"
                }}
              >
                <SelectList
                  Title={"雨天時上學的通勤狀況"}
                  Weather="rain"
                  Go="school"
                />
              </Grid>
            </Grid>
            <Grid item container xs={6} direction="column" mt={3}>
              <Grid
                item
                xs={6}
                sx={{
                  alignSelf: "center",
                  // backgroundColor:"#dbd82a"
                }}
              >
                <SelectList
                  Title={"雨天時放學的通勤狀況"}
                  Weather="rain"
                  Go="home"
                />
              </Grid>
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
                  marginTop: 85,
                  marginRight: 20,
                  alignSelf: "flex-end",
                }}
              >
                <IconButton
                  size="large"
                  sx={{ width: 50, height: 30 }}
                  onClick={next}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </div>
              <div
                style={{
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "#505050",
                  borderRadius: 5,
                  width: 50,
                  height: 30,
                  marginTop: -32,
                  marginRight: 85,
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
      </Box>
    </>
  )
}

export default Page5
