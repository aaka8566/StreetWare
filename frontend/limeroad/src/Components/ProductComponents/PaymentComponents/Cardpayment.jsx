import React from 'react'
import "./CSS/Cardpayment.css"


function Cardpayment({total}) {
  return (
    <div style={{width:"80%",margin:'auto'}}>
        <h4 style={{textAlign:"left"}}>₹ {Math.floor(total*10/100)} Discount Available</h4>
        <div className='carddetails'>
            <div className='Cardname'>
                <label className='required'>Card Number</label><br/>
                <input className='cardinput'/>
            </div>
            <div className='Cardname'>
                <label className='required'>Name on Card</label><br/>
                <input className='cardinput'/>
            </div>
            <div className='Month'>
                <label className='required'>Month & Year</label><br/>
                <input placeholder='MM' className='pass'/>/ <input placeholder='YY'className='pass' /> <input placeholder='CVV' className='pass' />
            </div>
            <div className='amounttopay'>
                <p>show Order Details</p>
                <div className='amount' >
                <h1>Amount Payable</h1>
                <h1>₹ {Math.floor(total+(total*18/100)-(total*10)/100)}</h1>
                </div>
            </div>
            <div className='cardbutton'>
                <button>CONFIRM ORDER ₹ {Math.floor(total+(total*18/100)-(total*10)/100)} </button>
            </div>
        </div>

    </div>
  )
}

export default Cardpayment