import logo from "./logo.svg"
import { useNavigate, Link} from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Grid, Card, InputLabel, FormControl, Select, Paper, Box, MenuItem, TextField, Typography, IconButton} from '@mui/material';
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { updateCheck } from "../slice/tmpSlice";



const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];


function Page1() {
  const [personName, setPersonName] = useState<string[]>([]);
  const [schoolName, setSchoolName] = useState<string>("北一女");
  const [select_gender, setSelect_gender] = useState<string>("female");

  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const checkInfo = () => {
    navigate('/page2');
  }

  return (
    <>
      <Box sx={{
        // backgroundColor: "#456365",
        padding: 7, 
      }}>
        <Paper
          elevation={4} 
          sx={{
            width: 1100,
            height: 520,
            backgroundColor: "#F5F5F5",
        }}>
          <Grid container sx={{
            // backgroundColor: "#30290560",
            display: "flex",
          }}>
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight="bold" ml={3} mt={3}>
                Basic Information
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ marginLeft: 3, marginTop: 2, minWidth: 360, maxWidth: 400  }}>
                <InputLabel>School </InputLabel>
                <Select
                  multiple
                  value={personName}
                  // onChange={handleChange}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12}>
              <FormControl sx={{ marginLeft: 3, marginTop: 2, minWidth: 360, maxWidth: 400}}>
                <InputLabel>Gender</InputLabel>
                <Select
                  value={select_gender}
                  onChange={(item) => {
                    setSelect_gender(item.target.value)
                    // console.log(item.target.value);
                  }}
                >
                  <MenuItem value="male">male</MenuItem>
                  <MenuItem value="female">female</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Age"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{marginLeft: 3, marginTop: 2, minWidth: 360, maxWidth: 400}}
              />
            </Grid>

            <Grid item sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}>

              <div style={{borderWidth: 1, borderStyle: "solid", borderColor: "#505050", borderRadius: 5, width: 50, height: 30, marginTop: 200, marginRight: 20, alignSelf: "flex-end"}}>            
                <IconButton size="large" sx={{width: 50, height: 30,}} onClick={checkInfo}> 
                  <ArrowForwardIosIcon/>
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  )
}

export default Page1