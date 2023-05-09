import React, { useState } from 'react'
import "./CSS/Adress.css"

function Address() {

const [pin,setPin]=useState("")
const [mobile,setMobile]=useState("")
const [name,setName]=useState("")
const[flat,setFlat]=useState("")
const[colony,setColony]=useState("")
const[city,setCity]=useState("")
const[MyState,setMyState]=useState("")
const [Type,setType]=useState("")

const [address,setAdress]=useState(false)
const handleType=(e)=>{
    setType(e.target.value)
}

const handleSubmit=()=>{
    const payload={
        pin,mobile,name,flat,colony,city,MyState,Type
    }
    localStorage.setItem("MyAddress",JSON.stringify(payload))
   setAdress(true)
}
 const myadress=JSON.parse(localStorage.getItem("MyAddress"))

  return (
    <>
    <div className='addressbook'>
{ address?      <h1>Your Shipping Address</h1>: <h1>Please Fill Address For Shipping</h1>
}    
  {address?<div className='currentaddress'>
    <h2>{myadress.name}</h2>
    <h2>{myadress.colony}</h2>
    <h2>{myadress.flat}</h2>
    <h2>{myadress.city}</h2>
    <h2>{myadress.pin}</h2>
    <h2>{myadress.MyState}</h2>
    <h2>{myadress.mobile}</h2>
    <h2>{myadress.Type}</h2>
    <hr/>
    <button className='addnewaddress' onClick={()=>setAdress(false)}>Add new Address</button>
  </div>: 
    <div className='formpart'>
    
    <div className='pincode'>
        <div>
            <label className='required'>PIN code</label><br/>
            <input value={pin} className='input' onChange={(e)=>setPin(e.target.value)} required={true} />
        </div>
        <div>
            <label className='required'>Mobile Number</label><br/>
            <input value={mobile} type='number' onChange={(e)=>setMobile(e.target.value)}  className='input' required={true}/>
        </div>
    </div>
    <div style={{width:"100%"}}>
            <label  className='required'>Full Name</label><br/>
            <input value={name} type="text" onChange={(e)=>setName(e.target.value)} className='input' required={true} />
        </div>
        <div style={{width:"100%"}}>
            <label  className='required'>Flat / House No. / Building Name </label><br/>
            <input value={flat} type="text" onChange={(e)=>setFlat(e.target.value)} className='input' required={true} />
        </div>
        <div style={{width:"100%"}}>
            <label  className='required'>Colony / Locality / Road Name </label><br/>
            <input type="text" value={colony} onChange={(e)=>setColony(e.target.value)} className='input' required={true} />
        </div>
        <div className='pincode'>
        <div>
            <label className='required'>City</label><br/>
            <input value={city} className='input' onChange={(e)=>setCity(e.target.value)} required={true}/>
        </div>
        <div>
            <label className='required'>State</label><br/>
            <input value={MyState} type='text' onChange={(e)=>setMyState(e.target.value)}  className='input' required={true}/>
        </div>
    </div>
    <div className='addresstype' onChange={handleType}>
        <div >
            <label >Address Type</label><br/>
            <input value={"Office"} type="radio" name="Type"  required={true} style={{margin:"5px"}}/><label>Office</label>
        </div>
        <div>
        <label ></label><br/>
            <input value={"Home"}type='radio'required={true} name="Type" style={{margin:"5px"}}/><label>Home</label>
        </div>
    </div>
    <button style={{border:".5px solid gray",padding:"5px",borderRadius:"2px"}} onClick={handleSubmit}>ADD</button>
    </div>}
    </div>
    </>
  )
}

export default Address