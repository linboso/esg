import logo from "./logo.svg"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import MainPage from "./pages/home"
import SettlementPage from "./pages/SettlementPage"
import Page2 from "./pages/page2";


import "./App.css"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" Component={() => <Layout/>}> */}
        <Route index Component={() => <MainPage/>}></Route>
        <Route path="/page2" Component={() => <Page2/>}></Route>
        <Route path="/page4" Component={() => <SettlementPage/>}></Route>
        {/* <Route path="/page3" Component={() => <SettlementPage/>}></Route> */}
        {/* </Route> */}
        {/* <Route path="/" element={<MainPage/>}></Route> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App
