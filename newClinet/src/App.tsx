import logo from "./logo.svg"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";


import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/Page4"


import "./App.css"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index Component={() => <Page1/>}></Route>
          <Route path="/page2" Component={() => <Page2/>}></Route>
          {/* <Route path="/page3" Component={() => <Page3/>}></Route> */}
          {/* <Route path="/page4" Component={() => <Page4/>}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
