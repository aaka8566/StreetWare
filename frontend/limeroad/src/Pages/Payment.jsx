import React, { useState } from 'react'
import Address from '../Components/ProductComponents/PaymentComponents/Address'
import CartOverview from '../Components/ProductComponents/PaymentComponents/CartOverview'
import "../Components/ProductComponents/PaymentComponents/CSS/payment.css"
import Upipayment from '../Components/ProductComponents/PaymentComponents/Upipayment'
import  Cashondelivery  from '../Components/ProductComponents/PaymentComponents/Cashondelivery'
import Cardpayment from '../Components/ProductComponents/PaymentComponents/Cardpayment'
import NetBanking from '../Components/ProductComponents/PaymentComponents/NetBanking'
 import { useSelector } from 'react-redux'



export const Payment = () => {

const mode=[
  {
    "type":"Cash On Delivery",
    "offer":"Pay Online & get 10% off"
  },
  {
    "type":"Paytm/Google Pay/PhonePe",
    "offer":"Extra 10% off"
  },
  {
    "type":"Debit Card/ Credit card",
    "offer":"Extra 10% off"
  },
  {
    "type":"Net Banking",
    "offer":"Extra 10% off"
  }
]

const [click,setClick]=useState("")

const {cartproduct}=useSelector(store=>store.CartReducer)

let total=0;
for(let el of cartproduct){
  total+=el.Quantity*el.price
}




  return (
<div className='paymentbody'>
<div className='paymentsection'>
<div className='firstpart'>
      <Address/>
      <CartOverview/>
      
    </div>
<div className='SecondPart'>
 <div className='pinkbanner'>
 <img className='SmallImage' src="https://img0.junaroad.com/images/icons/prepaid_resized.gif?imbypass=true" alt="logo"/>
<div style={{display:"flex",flexDirection:"column",textAlign:"left"}}>
  <p><b>Pay Online & Get FLAT 10% OFF</b></p>
  <p>Paytm, Gpay, PhonePe, Net Banking, Debit & Credit Cards</p>
</div>
 </div>
 <h1 className='mode'>Payment Mode</h1>

 <div className='paymentParts'>
    <div className='paymentPart1'>
       {mode.map((el)=>(
         <div className='Types' key={el.type} onClick={()=>{setClick(el.type)}}  >
         <h4>{el.type}</h4>
         <p>({el.offer})</p>
       </div>
       ))}
    </div>
    <div className='paymentPart2'>
      
      {click==="Cash On Delivery"?<Cashondelivery total={total}/>:""}
      {click==="Paytm/Google Pay/PhonePe"?<Upipayment total={total}/>:""}
      {click==="Debit Card/ Credit card"?<Cardpayment total={total}/>:""}
      {click==="Net Banking"?<NetBanking total={total}/>:""}

    </div>
 </div>
</div>
</div>
</div>
  )
}

