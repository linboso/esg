import { Outlet } from "react-router-dom";
import HomePage from "./pages/home";
import SettlementPage from "./pages/Page4";

const Layout = () => {
  return (
    <div>
      <HomePage />
      <Outlet />
      <SettlementPage />
    </div>
  );
};

export default Layout;