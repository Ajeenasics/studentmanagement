import React from 'react'
import { Link } from 'react-router-dom'
import '../Teacher/Teacherhomepage.css'
import photo1 from '../../images/img1.jpg'
import photo2 from '../../images/img2.jpg'
import photo3 from '../../images/img3.jpg'


function Teacherhomepage() {
  return (
    <div id="big2">
    <div class="container text-center">
    <div class="row align-items-end">
    <div class="container">
    <h1  id="home2">HOME PAGE</h1>
        <hr/>

    <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={photo1}  id="img1" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={photo2}  id="img2"class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={photo3}  id="img3" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Teacherhomepage