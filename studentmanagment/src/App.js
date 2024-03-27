import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Land from './Pages/LandingNavbar'
import Studenthomepage from"./Components/Student/Studenthomepage"
import StudentLogin from './Components/Student/StudentLoging'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Footer from './Pages/footer'
import Myproflie from './Components/Student/myproflie'



function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    
    
      
        <Route path='/land' element={<Land/>}/>
        <Route path="/Shome" element={<Studenthomepage/>}/>
        <Route path="/Studentlogin" element={<StudentLogin/>}/>
        <Route path="/Footer" element={<Footer/>}/>
        <Route path="/myproflie" element={<Myproflie/>}/>
        

    </Routes>
    </BrowserRouter>
  )
}

export default App
