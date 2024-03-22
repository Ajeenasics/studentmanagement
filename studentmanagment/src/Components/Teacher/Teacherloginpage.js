import React from 'react'
import { Link } from 'react-router-dom'
import './Teacherloginpage.css'

function Teacherloginpage() {
  return (
    <div id="big">

<form>
        <div id="division">
        <h1 id="a">TEACHER LOGIN</h1>
        <input type="text" placeholder="User name" id="c"/>
        <input type="password" placeholder="Password" id="d"/>
        <button type="submit" id="e"><Link to="/teacher" >LOGIN</Link></button>
    <hr/>
    <input type="checkbox" id="g"/>show password
        <p id="f"><a href="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DAndroid">forgot password?</a> </p>
            </div>
        </form>
    </div>
  )
}

export default Teacherloginpage