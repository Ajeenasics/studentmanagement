import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Land from './Pages/LandingNavbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/land' element={<Land/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App