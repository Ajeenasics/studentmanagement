import React from 'react'
import { Link } from 'react-router-dom'

function Navbarhomepage2() {
  return (
    <div style={{backgroundColor:"brown"}} >
    <nav class="navbar navbar-expand-lg " id='navbody'>
<div class="container-fluid">
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
  <a  class="navbar-brand ms-5" href="#">STUDENT MANAGEMENT</a>
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  <li class="nav-item">
< Link to='/teacher'><a style={{marginLeft:"12cm" ,color:'white'}} class="nav-link disabled me-4" aria-disabled="true">HOME</a></Link>
</li>
<li class="nav-item">
< Link to='/viewprofile'><a style={{color:'white'}}class="nav-link disabled me-4" aria-disabled="true">PROFILE</a></Link>
</li>

<li class="nav-item">
<Link to='/registerstud'><a style={{color:'white'}}class="nav-link disabled me-4" aria-disabled="true">REGISTERSTUDENT</a></Link>
</li>
<li class="nav-item">
<a style={{color:'white'}}class="nav-link disabled me-4" aria-disabled="true">NOTIFICATION</a>
</li>
<li class="nav-item">
<a style={{color:'white'}}class="nav-link disabled me-4" aria-disabled="true">STUDENTLIST</a>
</li>
    
  </ul>
  <form class="d-flex" role="search">
    <Link to='/teacherlogin'><button style={{color:'white'}}class="btn btn-outline-success me-3" type="submit">Login</button></Link>
    {/* <Link to='/log'><button class="btn btn-outline-success me-5" type="submit">Register</button></Link> */}

  </form>
</div>
</div>
</nav>
</div>
  )
}

export default Navbarhomepage2