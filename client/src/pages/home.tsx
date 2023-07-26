import logo from "./logo.svg"
import { useNavigate, Link} from "react-router-dom";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import PublicIcon from '@mui/icons-material/Public';
import {Grid, collapseClasses, FormControl, FormLabel,RadioGroup, FormControlLabel, Radio, Button, TextField, Box, Typography} from '@mui/material';
import Dplace from "../features/Dplace/Dplace";
import { useState } from "react";

function MainPage() {
  const [next, setNext] = useState<boolean>(false);
  const [morenext, setmoreNext] = useState<boolean>(false);
  const [gender, setGender] = useState<string>("female");
  const [age, setAge] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  let navigate = useNavigate();

  return (
    <div className="App">
      <Grid container direction="row" spacing={2}>
        <Grid item mt={3} xs={12}>
          <Typography variant="h3" sx={{marginLeft: -100}}>Carbon Footprint calculator</Typography>
        </Grid>
        <Grid item xs={3}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">天氣狀況</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              defaultValue="sunny"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="sunny" control={<Radio />} label="晴天" />
              <FormControlLabel value="rain" control={<Radio />} label="雨天" />
            </RadioGroup>
          </FormControl>
        </Grid>
        
        <Grid item mt={3} xs={12}></Grid>
        <Grid container item xs={12}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/bike.png" typename="腳踏車"/></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/motor.png" typename="機車"/></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/mrt.png" typename="捷運"/></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/lighttrain.png" typename="輕軌"/></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/car.png" typename="汽車"/></Grid>
          <Grid item xs={1}></Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/bus.png" typename="公車"/></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/emotor.png" typename="電動摩托車"/></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/walk.jpg" typename="走路"/></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/train.png" typename="火車"/></Grid>
          <Grid item xs={2}><Dplace picpath="./pic/ecar.png" typename="電動汽車"/></Grid>
          <Grid item xs={1}></Grid>

        </Grid>
        <Grid item xs={11}></Grid>
        <Grid item xs={1}>
          {!next?
            <Button variant="contained" startIcon={<NextPlanIcon/>} size="large" onClick={() => {setNext(true)}}>
              下一步
            </Button>
            :
            !morenext?
              <Button variant="contained" startIcon={<NextPlanIcon/>} size="large" onClick={() => {setmoreNext(true)}}>
                再一步
              </Button>
            : 
              <Button variant="contained" startIcon={<PublicIcon/>} size="large" onClick={() => {
                if(gender === "" || age === "" || location === "") return;
                if(gender != "") console.log(gender);
                if(age != "") console.log(age);
                if(location != "") console.log(location);

                navigate('/ass');
                navigate(0);
              }}>
                結算
              </Button>
          }
        </Grid>
      </Grid>
    </div>
  )
}

export default MainPage
