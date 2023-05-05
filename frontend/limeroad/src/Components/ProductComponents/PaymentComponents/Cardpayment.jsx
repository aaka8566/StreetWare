import React from 'react'
import "./CSS/Cardpayment.css"


function Cardpayment() {
  return (
    <div style={{width:"80%",margin:'auto'}}>
        <h4 style={{textAlign:"left"}}>₹ 121 Discount Available</h4>
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
                <h1>₹ 1260</h1>
                </div>
            </div>
            <div className='cardbutton'>
                <button>CONFIRM ORDER ₹ 1200 </button>
            </div>
        </div>

    </div>
  )
}

export default Cardpayment