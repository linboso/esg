import logo from "./logo.svg"
import { useNavigate, Link} from "react-router-dom";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import PublicIcon from '@mui/icons-material/Public';
import {Grid, Card, CardMedia, FormControl, FormLabel,RadioGroup, FormControlLabel, Radio, Button, TextField, Box, Typography, MenuItem} from '@mui/material';
import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import { useRequestProcessor } from "../hooks/useRequestProcessor";

function Page3() {
  const [gender, setGender] = useState<string>("female")
  const [age, setAge] = useState<string>("2")
  const [location, setLocation] = useState<string>("臺北市")

  const city = [
    "臺北市",
    "新北市",
    "桃園市",
    "台中市",
    "台南市",
    "高雄市",
    "基隆市",
    "新竹市",
    "嘉義市",
    "新竹縣",
    "苗栗縣",
    "彰化縣",
    "南投縣",
    "雲林縣",
    "嘉義縣",
    "屏東縣",
    "宜蘭縣",
    "花蓮縣",
    "臺東縣",
    "澎湖縣",
    "連江縣",
    "金門縣",
  ]

  let navigate = useNavigate()
  const { mutate } = useRequestProcessor()

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} mt={2} ml={3} mb={12}>
          {/* <Typography variant="h3">Carbon Footprint calculator</Typography> */}
        </Grid>
        {/* =========================== */}

        <Grid item xs={3}></Grid>
        <Grid container item xs={3} direction="column">
          <Grid item xs={12}>
            <Box
              width={300}
              height={600}
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 3, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              justifyContent="center"
              alignItems="center"
            >
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{ marginLeft: 3 }}
              >
                性別
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                defaultValue="female"
                name="row-radio-buttons-group"
                value={gender}
                sx={{ marginLeft: 3 }}
                onChange={(form) => {
                  setGender(form.target.value)
                }}
              >
                <FormControlLabel value="male" control={<Radio />} label="男" />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="女"
                />
              </RadioGroup>

              <TextField
                required
                id="outlined-required"
                type="number"
                label="Age"
                defaultValue="2"
                helperText="Please entry you Age"
                onChange={(input) => {
                  setAge(input.target.value)
                }}
              />

              <TextField
                id="outlined-select-currency"
                select
                label="Location"
                defaultValue="臺北市"
                helperText="Please select your City"
                onChange={(item) => {
                  setLocation(item.target.value)
                }}
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

        <Grid item xs={3}>
          <Card
            variant="outlined"
            sx={{
              maxHeight: "80%",
              minHeight: 200,
              maxWidth: "80%",
              minWidth: 200,
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="auto"
              width="auto"
              image="../../pic/otter2.gif"
              // image="../../pic/otter.jpg"
            />
          </Card>
        </Grid>
        <Grid item xs={3}></Grid>
        {/* ================================================= */}
        <Grid item container xs={12} direction="row">
          <Grid item xs={10}></Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              startIcon={<NextPlanIcon sx={{ transform: "rotate(180deg)" }} />}
              size="large"
              sx={{ marginRight: 2 }}
              onClick={() => {
                navigate(-1)
              }}
            >
              上一步
            </Button>
            <Button variant="contained" startIcon={<NextPlanIcon/>} size="large" onClick={() => {
                if(gender === "" || age === "" || location === "") return;
                
                navigate('/page4');
              }}>
              下一步
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Page3
