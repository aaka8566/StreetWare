import React from 'react'
import Address from '../Components/ProductComponents/PaymentComponents/Address'
import CartOverview from '../Components/ProductComponents/PaymentComponents/CartOverview'
import "../Components/ProductComponents/PaymentComponents/CSS/payment.css"
export const Payment = () => {
  return (
<div className='paymentbody'>
<div className='paymentsection'>
<div className='firstpart'>
      <Address/>
      <CartOverview/>
    </div>
<div className='secondpart'>
 <div className='pinkbanner'>
 <img className='smallimage' src="https://img0.junaroad.com/images/icons/prepaid_resized.gif?imbypass=true" alt="logo"/>
<div style={{display:"flex",flexDirection:"column",textAlign:"left"}}>
  <p><b>Pay Online & Get FLAT 10% OFF</b></p>
  <p>Paytm, Gpay, PhonePe, Net Banking, Debit & Credit Cards</p>
</div>
 </div>
 <h1 className='mode'>Payment Mode</h1>
</div>
</div>
</div>
  )
}

