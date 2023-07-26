import logo from "./logo.svg"
import { useNavigate, Link} from "react-router-dom";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import PublicIcon from '@mui/icons-material/Public';
import {Grid, collapseClasses, FormControl, FormLabel,RadioGroup, FormControlLabel, Radio, Button, TextField, Box, Typography, MenuItem} from '@mui/material';
import { useState } from "react";

function Page2() {
  const [gender, setGender] = useState<string>("female");
  const [age, setAge] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const city = ["臺北市","新北市", "桃園市", "台中市", "台南市", "高雄市",
                "基隆市","新竹市", "嘉義市", "新竹縣", "苗栗縣", "彰化縣",
                "南投縣","雲林縣", "嘉義縣", "屏東縣", "宜蘭縣", "花蓮縣",
                "臺東縣","澎湖縣", "連江縣", "金門縣"]

  let navigate = useNavigate();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">Carbon Footprint calculator</Typography>
        </Grid>

        <Grid container item xs={4} direction="column">
          <Grid item xs={12} sx={{backgroundColor: "#133245"}}>
            <Box 
              width= {300}
              height= {600}
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 3, width: '25ch' },
              }}
              noValidate
              autoComplete="off"

            >
              
              <FormLabel id="demo-row-radio-buttons-group-label">性別</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                defaultValue="female"
                name="row-radio-buttons-group"
                value={gender}
                onChange={(form) => {setGender(form.target.value)}}
                >
                <FormControlLabel value="male" control={<Radio />} label="男" />
                <FormControlLabel value="female" control={<Radio />} label="女" />
              </RadioGroup>
 

              <TextField 
                required 
                id="outlined-required" 
                type="number" 
                label="Age" 
                defaultValue="2"
                helperText="Please entry you Age" 
                onChange={(input) => {setAge(input.target.value)}}/>

              <TextField
                  id="outlined-select-currency"
                  select
                  label="Location"
                  defaultValue="EUR"
                  helperText="Please select your City"
                >
                  {city.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
            </Box>  
          </Grid>
        </Grid>

        <Grid item xs={8} sx={{backgroundColor:"#512364"}}> 
          PIC
        </Grid>
      </Grid>
    </>
  )
}

export default Page2



{/* <Grid item xs={12} sx={{backgroundColor: "#FFF55F"}}>
<Box
component="form"
sx={{
  '& .MuiTextField-root': { m: 1, width: '25ch' },
}}
noValidate
  autoComplete="off"
>
  <FormControl>
    <FormLabel id="demo-row-radio-buttons-group-label">性別</FormLabel>
    <RadioGroup
      // row
      aria-labelledby="demo-row-radio-buttons-group-label"
      defaultValue="female"
      name="row-radio-buttons-group"
      value={gender}
      onChange={(form) => {setGender(form.target.value)}}
      >
      <FormControlLabel value="male" control={<Radio />} label="男" />
      <FormControlLabel value="female" control={<Radio />} label="女" />
    </RadioGroup>
  </FormControl>

  <TextField 
    required 
    id="outlined-required" 
    type="number" 
    label="Age" 
    defaultValue="2"
    helperText="Please entry you Age" 
    onChange={(input) => {setAge(input.target.value)}}/>
  {/* <TextField required id="outlined-required" type="text" label="Location" defaultValue="" onChange={(input) => {setLocation(input.target.value)}}> */}
//   <TextField
//     id="outlined-select-currency"
//     select
//     label="Location"
//     defaultValue="EUR"
//     helperText="Please select your City"
//   >
//     {city.map((option) => (
//       <MenuItem key={option} value={option}>
//         {option}
//       </MenuItem>
//     ))}
//   </TextField>

// </Box>
// </Grid> 