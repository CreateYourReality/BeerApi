import { Route, Routes,BrowserRouter } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import List from "./pages/List"
import Detail from "./pages/Detail"

function App() {

  return (
    <>
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/react-vite-gh-pages/'}
>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/detail/:beerID" element={<Detail/>} />
        <Route path="/detail/:rnd" element={<Detail/>} />
      </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
