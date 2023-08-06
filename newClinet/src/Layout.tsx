import { Outlet } from "react-router-dom"
import { Grid, Box } from "@mui/material"

import Header from "./pages/header"
import Footer from "./pages/footer"
import Sider from "./pages/sider"
import { useMobileDetect } from "./hooks/uesMobileDetect"

import MobileHeader from "./pages/mobile/header"
import { styled } from "styled-components"

const Container = styled.div`
  display: flex;
  width: 390px;
  padding: 30px 20px;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  flex-shrink: 0;
`

const Layout = () => {
  const { isMobile } = useMobileDetect()
  console.log(isMobile())
  return (
    <>
      <Grid container>
        {!isMobile() ? (
          <>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid
              item
              container
              xs={12}
              direction="row"
              sx={{
                height: "100%",
              }}
            >
              <Grid item xs={7.6}>
                <Outlet />
              </Grid>
              <Grid item xs={4}>
                <Sider />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </>
        ) : (
          <Container>
            <Grid item xs={12}>
              <MobileHeader />
            </Grid>
            <Grid
              item
              container
              xs={12}
              direction="row"
              sx={{
                height: "100%",
              }}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={7.6}>
                <Outlet />
              </Grid>
              <Grid item xs={4}>
                {/* <Sider /> */}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {/* <Footer /> */}
            </Grid>
          </Container>
        )}
      </Grid>
    </>
  )
}

export default Layout
