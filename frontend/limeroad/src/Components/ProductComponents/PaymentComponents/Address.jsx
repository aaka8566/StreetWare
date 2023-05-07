import React from 'react'
import "./CSS/Adress.css"

function Address() {
  return (
    <>
    <div className='addressbook'>
       <h1>Please Fill Address For Shipping</h1>
    <div className='formpart'>
    <div className='pincode'>
        <div>
            <label className='required'>PIN code</label><br/>
            <input  className='input' required={true}/>
        </div>
        <div>
            <label className='required'>Mobile Number</label><br/>
            <input type='number'   className='input' required={true}/>
        </div>
    </div>
    <div style={{width:"100%"}}>
            <label  className='required'>Full Name</label><br/>
            <input type="text"  className='input' required={true} />
        </div>
        <div style={{width:"100%"}}>
            <label  className='required'>Flat / House No. / Building Name </label><br/>
            <input type="text"  className='input' required={true} />
        </div>
        <div style={{width:"100%"}}>
            <label  className='required'>Colony / Locality / Road Name </label><br/>
            <input type="text"  className='input' required={true} />
        </div>
        <div className='pincode'>
        <div>
            <label className='required'>City</label><br/>
            <input  className='input' required={true}/>
        </div>
        <div>
            <label className='required'>State</label><br/>
            <input type='number'   className='input' required={true}/>
        </div>
    </div>
    <div className='addresstype'>
        <div >
            <label >Address Type</label><br/>
            <input  type="radio"  required={true} style={{margin:"5px"}}/><label>Office</label>
        </div>
        <div>
        <label ></label><br/>
            <input type='radio'required={true} style={{margin:"5px"}}/><label>Home</label>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Address