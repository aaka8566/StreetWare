import React from 'react'
import "./CSS/cartitem.css"
import {Link as NavLink} from "react-router-dom"
function CartOverview() {
  const product=[
  {
    "_id": "64520eb37a2b535d2f820039",
    "image": "https://img3.junaroad.com/uiproducts/15892957/pri_175_p-1547294126.jpg",
    "title": "Logo Print Round-Neck Sweatshirt",
    "brand": "Levanse",
    "price": 849,
    "before_disc": 1699,
    "offer_percent": 50,
    "gender": "Men",
    "type": "Formal Shoes",
    "model": "Western Wear",
    "size": [
    "M",
    "S",
    "L",
    "XL",
    "XXL",
    "XXXL"
    ],
    "Quantity": 7,
    "__v": 0
    },
    {
      "_id": "64520eb37a2b535d2f820039",
      "image": "https://img3.junaroad.com/uiproducts/15892957/pri_175_p-1547294126.jpg",
      "title": "Logo Print Round-Neck Sweatshirt",
      "brand": "Levanse",
      "price": 849,
      "before_disc": 1699,
      "offer_percent": 50,
      "gender": "Men",
      "type": "Formal Shoes",
      "model": "Western Wear",
      "size": [
      "M",
      "S",
      "L",
      "XL",
      "XXL",
      "XXXL"
      ],
      "Quantity": 7,
      "__v": 0
      }]
  
  
  return (
    <div style={{marginBottom:"40px"}}>
      <div className='headers'>
        Cart Items({product.length})
      </div>
      {product.map((product)=>(
        <div className='overviewproducts'>
        <div className='picture'>
         <img src={product.image} alt="product"/>
        </div>
        <div className='overviewdetails' >
         <p>{product.title}</p>
         <p>Quantity: {product.Quantity}</p>
         <p>Size: {product.size[0]}</p>
        </div>
        <div>
 
        </div>
       </div>
      ))}
      <div className='editcart'>
        <NavLink to="/cart">  <button>EDIT CART</button></NavLink>
      </div>
      <div className='footer'>
        <p>Limeroad is offered in : हिन्दी</p>
        <p>For order related queries, please use our need help section in My Orders</p>
      </div>
    </div>
  )
}

export default CartOverview