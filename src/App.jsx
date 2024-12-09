import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Posts from "./pages/Posts"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/posts" element={<Posts />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
