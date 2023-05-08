import React from 'react'
import "../CartComponents/cart.css"

function Upipayment({total}) {

  return (
    <div >
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
<h4>+ ₹ {Math.floor(total*18/100)}</h4>
</div>
<div className='parts'>
    <h4>LR Credit applied</h4>
    <h4> - ₹ 0</h4>
</div>
<div className='parts'>
    <h4>Prepaid Discount</h4>
    <h4> - ₹ {Math.floor((total*10)/100)}</h4>
</div>
<div className='parts5'>
    <h1>Amount Payable</h1>
    <h1>₹ {Math.floor(total+(total*18/100)-(total*10)/100)}</h1>
</div>

<div className='confirmbutton1'>
<button>CONFIRM ORDER ₹ {Math.floor(total+(total*18/100)-(total*10)/100)}</button>
</div>
    </div>
  )
}

export default Upipayment