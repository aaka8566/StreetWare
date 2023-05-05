import React from 'react'
import "../CartComponents/cart.css"

function NetBanking({total}) {

  return (
    <div >
<div className='net'>
    <h2 >₹ 121 Discount Available</h2>
    <div>
        <label>Select your bank</label>
        <input className='netinput'/>
    </div>
</div>
<div className='parts'>
<h1 style={{fontSize:"15px"}}>Order Details</h1>
</div>
<div className='parts'>
<h4>Total Price</h4>
<h4>₹ {total}</h4>
</div>
<div className='parts'>
<h4>Shipping Charges Price</h4>
<h4>Free</h4>
</div>
<div className='parts'>
<h4>Applicable Tax and Charges</h4>
<h4>+ ₹ 416</h4>
</div>
<div className='parts'>
    <h4>LR Credit applied</h4>
    <h4> - ₹ 0</h4>
</div>
<div className='parts'>
    <h4>Prepaid Discount</h4>
    <h4> - ₹ {total-(total*10)/100}</h4>
</div>
<div className='parts5'>
    <h1>Amount Payable</h1>
    <h1>₹ {total+416}</h1>
</div>

<div className='confirmbutton1'>
<button>CONFIRM ORDER {total}</button>
</div>
    </div>
  )
}

export default NetBanking