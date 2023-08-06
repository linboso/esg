import logo from "./logo.svg"
import { useNavigate, Link } from "react-router-dom"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import {
  Grid,
  Card,
  InputLabel,
  FormControl,
  Select,
  Paper,
  Box,
  MenuItem,
  TextField,
  Typography,
  IconButton,
} from "@mui/material"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { updateInfo } from "../../slice/infoSlice"
import { useMobileDetect } from "../../hooks/uesMobileDetect"

const schools = [
  "竹圍高中",
  "新北高中",
  "中崙高中",
  "和平高中",
  "南湖高中",
  "慈濟高中",
  "復旦高中",
  "鹿港高中",
  "臺灣師範大學附屬高中",
  "北大高中",
  "萬方高中",
  "其他（非高中）",
]

function Page1() {
  const [schoolName, setSchoolName] = useState<string>("其他（非高中）")
  const [select_gender, setSelect_gender] = useState<string>("female")
  const [age, setAge] = useState<string>("16")

  const dispatch = useAppDispatch()
  let navigate = useNavigate()

  const checkInfo = () => {
    // console.log(schoolName + " / " + select_gender + " / " + age);
    if (schoolName == "" && select_gender == "" && age == "") {
      alert("Please fill in corrects informance")
    }
    dispatch(updateInfo([schoolName, select_gender, age]))
    navigate("/mobile-page2")
  }

  return (
    <>
      <Box
        sx={{
          // backgroundColor: "#456365",
          padding: 3,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            width: "150%",
            // height: "100%",
            height: "621px",
            backgroundColor: "#F5F5F5",
            borderRadius: "30px",
            display: "flex",
            // flexDirection: 'row'
          }}
        >
          <Grid
            container
            // align="center"
            // justify="center"
            justifyContent="center"
            alignItems="center"
            sx={{
              display: "flex",
              // padding: 20px;
              //   flexDirection: "column",
              //   alignItems: "flex-start",
              //   gap: "10px",
              //   flex: "1 0 0",
              //   alignSelf: "stretch",
            }}
          >
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight="bold" ml={3} mt={3}>
                Basic Information
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <FormControl
                sx={{
                  marginLeft: 3,
                  marginTop: 2,
                  width: 200,
                  //   maxWidth: 400,
                }}
              >
                <InputLabel>School</InputLabel>
                <Select
                  label="School"
                  value={schoolName}
                  onChange={(item) => {
                    setSchoolName(item.target.value)
                  }}
                >
                  {schools.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl
                sx={{
                  marginLeft: 3,
                  marginTop: 2,
                  width: 200,
                  //   maxWidth: 400,
                }}
              >
                <InputLabel>Gender</InputLabel>
                <Select
                  label="Gender"
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
                sx={{
                  marginLeft: 3,
                  marginTop: 2,
                  width: 200,
                  //   maxWidth: 400,
                }}
                value={age}
                onChange={(item) => {
                  setAge(item.target.value)
                }}
              />
            </Grid>

            <Grid
              item
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "#505050",
                  borderRadius: "5px",
                  width: 50,
                  height: 30,
                  marginTop: 200,
                  marginRight: 20,
                  marginBottom: 20,
                  alignSelf: "flex-end",
                }}
              >
                <IconButton
                  size="large"
                  sx={{ width: 50, height: 30 }}
                  onClick={checkInfo}
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

export default Page1
