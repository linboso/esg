import logo from "./logo.svg"
import { FC, useEffect, useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import PublicIcon from '@mui/icons-material/Public';
import {Grid, collapseClasses, FormControl, FormLabel,RadioGroup, FormControlLabel, Radio, Button, TextField, Box, Typography} from '@mui/material';

import Dplace from "../features/Dplace/Dplace";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { updateGoSchool, updateGoHome, udateWeather } from "../slice/womSlice";
import { clearTmpArray } from "../slice/tmpSlice";


const MainPage:FC = () => {
  const [next, setNext] = useState<boolean>(false);
  const state = useAppSelector((state) => state.TmpArray);
  const form = useAppSelector((state) => state.wayOfMoving);

  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    console.log(state.tmp.list[0]);
    dispatch(clearTmpArray());
  },[clearTmpArray]);



  const _updateGoSchool = () => {
    setNext(true);
    dispatch(updateGoSchool(state.tmp.list));
    // console.log(state.tmp.list[0]);
    console.log(form.record.weather + " >> 更新 go school array");
  }
  
  const _updateGoHome = () => {
    dispatch(updateGoHome(state.tmp.list));
    console.log(form.record.weather  + " >> 更新 go home array");
    navigate('/page2');
  }

  return (
    <div className="App">
      <Grid container direction="row" spacing={2}>
        <Grid item mt={3} xs={12}>
          <Typography variant="h3" sx={{marginLeft: -3}}>Carbon Footprint calculator</Typography>
        </Grid>

        <Grid item xs={3}></Grid>
        <Grid item mt={3} xs={12}></Grid>
        <Grid container item xs={12}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/bike.png" typename="腳踏車" index={0}/></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/motor.png" typename="機車" index={1}/></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/mrt.png" typename="捷運" index={2}/></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/lighttrain.png" typename="輕軌" index={3}/></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/car.png" typename="汽車" index={4}/></Grid>
          <Grid item xs={1}></Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/bus.png" typename="公車" index={5}/></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/emotor.png" typename="電動摩托車" index={6}/></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/walk.jpg" typename="走路" index={7}/></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/train.png" typename="火車" index={8}/></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/ecar.png" typename="電動汽車" index={9}/></Grid>
          <Grid item xs={1}></Grid>

        </Grid>
        <Grid item container xs={12}>
        <Grid item xs={10}></Grid>
          {!next?
            <>
              <Button variant="contained" startIcon={<NextPlanIcon/>} size="large" onClick={_updateGoSchool}>
                回家時
              </Button>
            </>
            :
            <>
              <Button variant="contained" startIcon={<NextPlanIcon sx={{transform: "rotate(180deg)"}}/>} size="large" sx={{marginRight: 2}}
                onClick={() => {
                  setNext(false);
                }}
                >
                返回
              </Button>
              <Button variant="contained" startIcon={<NextPlanIcon/>} size="large" onClick={_updateGoHome}>
                下一步
              </Button>
            </>
          }
        </Grid>
      </Grid>
    </div>
  )
}

export default MainPage
