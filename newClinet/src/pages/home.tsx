import logo from "./logo.svg"
import { FC, useEffect, useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import PublicIcon from '@mui/icons-material/Public';
import {Grid, collapseClasses, FormControl, FormLabel,RadioGroup, FormControlLabel, Radio, Button, TextField, Box, Typography} from '@mui/material';

import Dplace from "../features/Dplace/Dplace";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { updateGoSchool, updateGoHome, udateWeather, updataSumArray } from "../slice/womSlice";
import { clearTmpArray, updateClear } from "../slice/tmpSlice";


const MainPage:FC = () => {
  const [next, setNext] = useState<boolean>(false);
  const state = useAppSelector((state) => state.TmpArray);
  const form = useAppSelector((state) => state.wayOfMoving);

  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  
  const _updateGoSchool = () => {
    setNext(true);

    dispatch(updateGoSchool(state.tmp.list));
    dispatch(updataSumArray(state.tmp.list));
    dispatch(updateClear());
    dispatch(clearTmpArray());
    // console.log(state.tmp.list[0]);
    console.log(form.record.weather + " >> 更新 go school array");
  }
  
  const _updateGoHome = () => {
    dispatch(updateGoHome(state.tmp.list));
    dispatch(updataSumArray(state.tmp.list));
    dispatch(updateClear());
    dispatch(clearTmpArray());
    console.log(form.record.weather  + " >> 更新 go home array");
    if(state.check.check) {
      navigate('/page3');

    }else{
      navigate('/page2');

    }
  }

  // useEffect(() => {
  //   console.log('flag');
  //   // dispatch(clearTmpArray());
  // },[_updateGoSchool]);
  
  const womType = [[
    {path: "./pic/bike.png", name: "腳踏車"},
    {path: "./pic/motor.png", name: "機車"},
    {path: "./pic/mrt.png", name: "捷運"},
    {path: "./pic/lighttrain.png", name: "輕軌"},
    {path: "./pic/car.png", name: "汽車"},
  ],[
    {path: "./pic/bus.png", name: "公車"},
    {path: "./pic/emotor.png", name: "電動摩托車"},
    {path: "./pic/walk.jpg", name: "走路"},
    {path: "./pic/train.png", name: "火車"},
    {path: "./pic/ecar.png", name: "電動汽車"},

  ]]


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
          {
          Object.values(womType[0]).map((item, index) => (
              <Grid item xs={2} key={index}>
                <Dplace picpath={item.path} typename={item.name} index={index} />
              </Grid>
            ))
          }
          <Grid item xs={1}></Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid item xs={1}></Grid>
          {
          Object.values(womType[1]).map((item, index) => (
              <Grid item xs={2} key={index}>
                <Dplace picpath={item.path} typename={item.name} index={index} />
              </Grid>
            ))
          }
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
                  dispatch(updateClear());
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
