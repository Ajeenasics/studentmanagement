import React from 'react'
import './Adminlpage.css'
import pic from "../../Components/Admin/Images/picture.jpg"
import { Link } from 'react-router-dom'



function Adminlpage() {
    return (
        <div>
            <div className='adminhomepic'>

                <div className='text'>
                    <h2>Hi </h2>
                    <h1>ADMIN!!</h1>

                </div>
                <div className='login'>
                    <button type="button" class="btn btn-outline-info"><Link to={'/adminhomepage'}>LOGIN</Link></button>

                </div>
            </div>
        </div>
    )
}

export default Adminlpage