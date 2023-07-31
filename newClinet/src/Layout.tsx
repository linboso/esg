import { Outlet } from "react-router-dom";
import {Grid, Box} from '@mui/material';

import Header from "./pages/header";
import Footer from "./pages/footer";
import Sider from "./pages/sider";


const Layout = () => {
  return (
    <>
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item container xs={12} direction="row" sx={{
        height: "100%"
      }}>
        <Grid item xs={7.6}>
          <Outlet />
        </Grid>
        <Grid item xs={4}>
          <Sider/>
        </Grid>

      </Grid>
      <Grid item xs={12}>
        <Footer/>
      </Grid>
    </Grid>
      
    </>
  );
};

export default Layout;