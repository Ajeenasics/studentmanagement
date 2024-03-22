import React from 'react'
import { Link } from 'react-router-dom'
import './Registerteacher.css'

function Registerteacher() {
  return (
    <div class="container text-center">
    <div class="row align-items-end" />
    <div class="container">
       <div id="new1">
            <form>

                <h1 id="a">REGISTER TEACHER</h1>
                <table id="table">
                    <tr >
                        <td id='name'>Name : </td><b/>
                        <td id='td1'><input type="text"id='inp1' placeholder="Enter name" /></td>
                    </tr>
                    <tr >
                        <td id='school'>School : </td><b/>
                        <td id='td2'><input type="text"id='inp2' placeholder="Enter id" /></td>
                    </tr>
                    <tr >
                        <td id='subject'>Subject : </td><b/>
                        <td id='td3'><input type="text"id='inp3' placeholder="Enter id" /></td>
                    </tr>

                    <tr>
                        <td id='email'>Email Id :</td><b/>
                        <td id='td4'><input type="email"id='inp4' placeholder="Enter email" /></td>
                    </tr>
                    <tr>
                        <td id='pass'>Password :</td><b/>
                        <td id='td5'><input type="password"id='inp5' placeholder="Enter password" /></td>
                    </tr>
 
                </table>

                < Link to="/teacherlogin"> <button type="submit" class="btn btn-success" id="button">REGISTER</button></Link>
            </form>
        </div>
    </div>
</div>

  )
}

export default Registerteacher