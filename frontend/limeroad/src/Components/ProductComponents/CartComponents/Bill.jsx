import React from 'react'
import "./cart.css"
import { Link as NavLink } from 'react-router-dom'

function Bill({total}) {
  return (
    <div >
<div className='parts'>
<h1 style={{fontSize:"20px"}}>SUMMARY</h1>
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
<h4>+ ₹ {total*18/100}</h4>
</div>
<div className='parts5'>
    <h1>Amount Payable</h1>
    <h1>₹ {total+Math.floor(total*18/100)}</h1>
</div>
<div className='buybutton'>
<NavLink to="/payment"><button>BUY NOW</button></NavLink>
</div>
    </div>
  )
}

export default Bill