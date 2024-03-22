import React from 'react'
import './Viewteacherprofile.css'
import photo4 from '../../images/imgteacher5.jpg'


function Viewteacherprofile() {
  return (
    <div id="new4">
    <h1>PROFILE</h1>
    <img src={photo4}  id="img5"alt="image"/>
    <table id="table4">
        <tr>
            <td>NAME :</td>
            <td>SONIYA P</td>
        </tr>
        <tr>
            <td>TEACHER ID :</td>
            <td>PWC0018</td>
        </tr>
        <tr>
            <td>EMAIL ID :</td>
            <td>soniyasuresh6@gmail.com</td>
        </tr>
        <tr>
            <td>PHONE NUMBER :</td>
            <td>9188780383</td>
        </tr>
        <tr>
            <td>DEPARTMENT :</td>
            <td>MATHEMATICS</td>
        </tr>
        <tr>
            <td>ADRESS :</td>
            <td>c-189, ISRO STAFF QUARTERS,THUMBA.</td>
        </tr>
    </table>
    <button type="submit" id="h4" class="btn btn-success">EDIT</button>
     {/* <button type="submit" id="back" class="btn btn-success"><a href="./homepage.html">BACK</a></button>     */}
</div>

  )
}

export default Viewteacherprofile