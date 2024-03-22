import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Land from './Pages/LandingNavbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Teacherhomepage from './Components/Teacher/Teacherhomepage'
import Navbarhomepage from './Components/Teacher/Navbarhomepage'
import Registerstudent from './Components/Teacher/Registerstudent'
import Teacherloginpage from './Components/Teacher/Teacherloginpage'
import Viewteacherprofile from './Components/Teacher/Viewteacherprofile'
import Navbarhomepage2 from './Components/Teacher/Navbarhomepage2'
import Registerteacher from './Components/Teacher/Registerteacher'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/land' element={<Land/>}/>
        <Route path='/teacher' element={[<Navbarhomepage2/>,<Teacherhomepage/>]}/>
        <Route path='registerstud' element={[<Navbarhomepage2/>,<Registerstudent/>]}/>
        <Route path='/teacherlogin' element={[<Land/>,<Teacherloginpage/>]}/>
        <Route path='/viewprofile' element={[<Navbarhomepage2/>,<Viewteacherprofile/>]}/>
        <Route path='/registertea' element={[<Land/>,<Registerteacher/>]}/>
        <Route path='/navbarnew2' element={[<Navbarhomepage2/>]}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App