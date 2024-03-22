import React from 'react'
import './Registerstudent.css'
import { Link } from 'react-router-dom'

function Registerstudent() {
  return (
    <div class="container text-center">
    <div class="row align-items-end" />
    <div class="container">
       <div id="new1">
            <form>
                <h1 id="a">REGISTER STUDENT</h1>
                <table id="table">
                    <tr >
                        <td>Name : </td>
                        <td><input type="text" placeholder="Enter name" /></td>
                    </tr>
                    <tr >
                        <td>Student Id : </td>
                        <td><input type="text" placeholder="Enter id" /></td>
                    </tr>
                    <tr>
                        <td>Email Id :</td>
                        <td><input type="text" placeholder="Enter email" /></td>
                    </tr>
                    <tr>
                        <td>Password :</td>
                        <td><input type="text" placeholder="Enter password" /></td>
                    </tr>
                    <tr>
                        <td>Father's Name :</td>
                        <td><input type="text" placeholder="Enter name" /></td>
                   </tr>
                    <tr>
                       <td>Father's Occupation :</td>
                        <td><input type="text" placeholder="Enter occupation" /></td>
                    </tr>
                    <tr>
                        <td>Mother's Name :</td>
                    </tr>
                    <tr>
                        <td>Mother's Occupation :</td>
                        <td><input type="text" placeholder="Enter occupation" /></td>
                    </tr>
                    <tr>
                        <td>Guardian's Name :</td>
                        <td><input type="text" placeholder="Enter name" /></td>
                    </tr>

                    <tr>
                        <td>Address</td>
                        <td><textarea name="message" rows="5" cols="20"></textarea></td>
                    </tr>
                </table>

                <button type="submit" class="btn btn-success" id="button">Register</button>
                {/* <!-- <button type="submit" class="btn btn-success" id="back"><a href="./homepage.html">Back</a></button> --> */}
            </form>
        </div>
    </div>
</div>
  )
}

export default Registerstudent