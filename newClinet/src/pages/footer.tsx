import { Box, Card } from "@mui/material"

function Footer() {
  return (
    <>
      <Box
        sx={{
          // backgroundColor: "#2b557c",
          display: "flex",
          width: "100%",
          height: 106,
          flexDirection: "column",
          marginTop: -2.5,
        }}
      >
        <img
          src="/footer.png"
          alt="footer"
          style={{
            alignSelf: "flex-end",
            height: 100,
            paddingRight: 20,
          }}
        />
      </Box>
    </>
  )
}

export default Footer
