import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./Layout"

import Page1 from "./pages/page1"
import Page2 from "./pages/page2"
import Page3 from "./pages/page3"
import Page4 from "./pages/Page4"
import Page5 from "./pages/page5"

import MobilePage1 from "./pages/mobile/page1"
import MobilePage2 from "./pages/mobile/page2"
import MobilePage3 from "./pages/mobile/page3"
import MobilePage4 from "./pages/mobile/page4"
import MobilePage5 from "./pages/mobile/page5"

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index Component={() => <Page1 />}></Route>
          <Route path="/page2" Component={() => <Page2 />}></Route>
          <Route path="/page3" Component={() => <Page3 />}></Route>
          <Route path="/page4" Component={() => <Page4 />}></Route>
          <Route path="/page5" Component={() => <Page5 />}></Route>
          <Route path="mobile-page1" Component={() => <MobilePage1 />}></Route>
          <Route path="mobile-page2" Component={() => <MobilePage2 />}></Route>
          <Route path="mobile-page3" Component={() => <MobilePage3 />}></Route>
          <Route path="mobile-page4" Component={() => <MobilePage4 />}></Route>
          <Route path="mobile-page5" Component={() => <MobilePage5 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
