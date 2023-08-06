import { Grid, Typography, Button, TextField, Box, Card } from "@mui/material"

function Header() {
  return (
    <>
      <Box
        sx={{
          // backgroundColor: "#3d9dbb",
          height: 80,
          padding: 3,
        }}
      >
        <Typography fontSize={18} fontWeight="bold">
          My Travel Diary
        </Typography>
        <Typography
          fontSize={12}
          sx={{
            marginTop: 2,
            // width: "300px",
            height: "60px",
          }}
        >
          This platform introduces the commute carbon footprint survey conducted
          by City Science Lab@Taipei Tech, aimed at assessing and addressing the
          environmental impact of daily commuting habits within the city.
        </Typography>
      </Box>
    </>
  )
}

export default Header
