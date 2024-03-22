import React from 'react'
import { Link } from 'react-router-dom'
import photo1 from "../images/img6.jpg"
function LandingNavbar() {
  return (
    <div style={{backgroundColor:"brown"}}>
    <nav class="navbar navbar-expand-lg bg-body-dark">
<div class="container-fluid">
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
  <a  class="navbar-brand ms-5" href="#">STUDENT MANAGEMENT</a>
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">

    
  </ul>
  <form class="d-flex" role="search">
    <Link to='/teacherlogin'><button class="btn btn-outline-success me-3" type="submit">Login</button></Link>
    <Link to='/registertea'><button class="btn btn-outline-success me-5" type="submit">Register</button></Link>

  </form>
</div>
</div>
</nav>
< img src={photo1} style={{height:"800px",width:"100%"}} alt="..."/>

</div>


  )
}

export default LandingNavbar