import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Land from './Pages/LandingNavbar'
import Studenthomepage from"./Components/Student/Studenthomepage"
import StudentLogin from './Components/Student/StudentLoging'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Footer from './Pages/footer'
import Myproflie from './Components/Student/myproflie'



import Adminlpage from './Components/Admin/Adminlpage'
import Adminhomepage from './Components/Admin/Adminhomepage'
import Mainadminhomepage from './Components/Admin/Mainadminhomepage'
import Adminhomenav from './Components/Admin/Adminhomenav'

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
<<<<<<< HEAD
    
    
      
        <Route path='/land' element={<Land/>}/>
        <Route path="/Shome" element={<Studenthomepage/>}/>
        <Route path="/Studentlogin" element={<StudentLogin/>}/>
        <Route path="/Footer" element={<Footer/>}/>
        <Route path="/myproflie" element={<Myproflie/>}/>
        
=======

         <Route path='/land' element={<Land/>}/> 
        <Route path='/adminlpage' element={<Adminlpage/>}/>
        <Route path='/adminhomepage' element={<Adminhomepage/>}/>
        <Route path='/mainhomepage' element={<Mainadminhomepage/>}/>
        <Route path='/adminnav' element={<Adminhomenav/>}/>

        <Route path='/land' element={<Land/>}/>
        <Route path='/teacher' element={[<Navbarhomepage2/>,<Teacherhomepage/>]}/>
        <Route path='registerstud' element={[<Navbarhomepage2/>,<Registerstudent/>]}/>
        <Route path='/teacherlogin' element={[<Land/>,<Teacherloginpage/>]}/>
        <Route path='/viewprofile' element={[<Navbarhomepage2/>,<Viewteacherprofile/>]}/>
        <Route path='/registertea' element={[<Land/>,<Registerteacher/>]}/>
        <Route path='/navbarnew2' element={[<Navbarhomepage2/>]}/>
>>>>>>> 6b92f8d894cae3c84f3877563ded849692f524aa

    </Routes>
    </BrowserRouter>
  )
}

export default App
