import React from 'react'
import { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import "./Admin.css"

const AdminLogin = () => {
  const [email,setEmail] = useState("");
  const [pass,setPassword] = useState("");
  const handleLogin = (e)=>{
    e.preventDefault();
    let obj = {email,pass}
    fetch(`https://worrisome-goat-flip-flops.cyclic.app/admin`,{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(obj)
    }).then((res)=>res.json())
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
  }

  return (
    <div>
      <div className="loginBox">
        <FaUserCircle className="userIcon" />
        <div className="loginChild">
          <div>
            <FaUserCircle className="FaUserCircle" />
            <p>ADMIN LOGIN</p>
          </div>
          <hr />
          <p>login to proceed further</p>
        </div>
      </div>
      <form className='loginForm'>
        <input placeholder="Enter Email" type="text"onChange={(e)=>{setEmail(e.target.value)}}/>
        <br/>
        <input placeholder="Enter password" type="password" onChange={(e)=>{setPassword(e.target.value)}} />
        <br/>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;