import logo from "./logo.svg"
import { useNavigate, Link} from "react-router-dom";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import PublicIcon from '@mui/icons-material/Public';
import {Grid, Card, CardMedia, FormControl, FormLabel,RadioGroup, FormControlLabel, Radio, Button, TextField, Box, Typography, MenuItem} from '@mui/material';
import { useState } from "react";

function Page2() {
  const [changewom, setChangewom] = useState<string>("");
  const [sure, setSure] = useState<boolean>(false);

  let navigate = useNavigate();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} mt={2} ml={3} mb={12}>
          {/* <Typography variant="h3">會嗎？</Typography> */}
        </Grid>
        {/* =========================== */}
        
        <Grid item xs={4}></Grid>
        <Grid container item xs={4} direction="column">
          <Grid item xs={12}>
            <Box 
              width= {300}
              height= {600}
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 3, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              justifyContent="center"
              alignItems="center"

            >
              
              <FormLabel id="row-radio-buttons-group-label" sx={{marginLeft: 3}}>如果今天下雨你會改變通勤方式嗎？</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                defaultValue="no"
                name="row-radio-buttons-group"
                value={changewom}
                sx={{marginLeft: 3}}
                
                onChange={(form) => {setChangewom(form.target.value)}}
                >
                <FormControlLabel value="yes" control={<Radio />} label="會" />
                <FormControlLabel value="no" control={<Radio />} label="不會" />
              </RadioGroup>
              
              {changewom == "yes" ? 
                <Typography variant="h3">真的嗎？</Typography> 
              :
                null
              }

              {sure && changewom!= "yes" && changewom != "no" ? 
                <Typography variant="h3">要確認ㄟ</Typography> 
              :
                null
              }

            </Box>  
          </Grid>
        </Grid>

        <Grid item xs={4}></Grid>

        {/* ================================================= */}
        <Grid item container xs={12} direction="row">
          <Grid item xs={10}></Grid>
          <Grid item xs={2}>

            <Button variant="contained" startIcon={<NextPlanIcon sx={{transform: "rotate(180deg)"}}/>} size="large" sx={{marginRight: 2}}
              onClick={() => {
                navigate(-1);
              }}
            >
              上一步
            </Button>
            <Button variant="contained" startIcon={<NextPlanIcon/>} size="large" onClick={() => {

                if(changewom == "yes"){
                  navigate('/');
                }
                else if(changewom == "no"){
                  navigate('/page3');
                }
                
                setSure(true);
                // navigate(0);
              }}>
              下一步
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Page2
