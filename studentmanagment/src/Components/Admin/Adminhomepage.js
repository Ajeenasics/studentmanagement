import React, { useState } from 'react'
import './Adminhomepage.css'
import img from '../../Components/Admin/Images/logbg.jpg'
import { Link,useNavigate } from 'react-router-dom'


function Adminhomepage() {
    const[data,setdata]=useState({
        email:" ",
        password:" ",
    })
    const navigate = useNavigate()
    const onchange=(a)=>{
        setdata({
            ...data,[a.target.name]:a.target.value
        })
        console.log(data);

    }
    const adminemail="admin@gmail.com"
    const adminpassword=12345

    const onsubmit=(e)=>{
        e.preventDefault()
        console.log(data.email);
        console.log(data.password);
        if(data.email==adminemail && data. password==adminpassword){
            alert("sucessfully logged in")
            console.log(data);
            navigate("/mainhomepage")

        }
        else{
            alert("not an admin")
        }
    }

    
    return (
        <div>
            <div className='log'>
                <form onSubmit={onsubmit} >
                    <div className='box' >
                        <p>email: <input type='text' name='email' value={data.email} onChange={onchange}></input></p>
                        <div className='pass'>
                            <p>password: <input type='password' name='password' value={data.password} onChange={onchange} ></input></p>
                        </div>
                        <br></br>
                        <div className='button'>
                            <button type="submit" class="btn btn-info">
                                LOGIN</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Adminhomepage