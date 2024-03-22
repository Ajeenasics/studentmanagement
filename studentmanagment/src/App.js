import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Land from './Pages/LandingNavbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Adminlpage from './Components/Admin/Adminlpage'
import Adminhomepage from './Components/Admin/Adminhomepage'
import Mainadminhomepage from './Components/Admin/Mainadminhomepage'
import Adminhomenav from './Components/Admin/Adminhomenav'

function App() {
  return (
    <BrowserRouter>
    <Routes>
         <Route path='/land' element={<Land/>}/> 
        <Route path='/adminlpage' element={<Adminlpage/>}/>
        <Route path='/adminhomepage' element={<Adminhomepage/>}/>
        <Route path='/mainhomepage' element={<Mainadminhomepage/>}/>
        <Route path='/adminnav' element={<Adminhomenav/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App