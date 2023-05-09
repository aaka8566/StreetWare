import React,{ useEffect}  from 'react'
import "./CSS/cartitem.css"
import {Link as NavLink} from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux';
import { getcartproduct } from '../../../Redux/CartReducer/CartAction';

function CartOverview() {

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getcartproduct)
  },[])
  
      const {cartproduct}=useSelector(store=>store.CartReducer)

  
  return (
    <div style={{marginBottom:"40px"}}>
      <div className='headers'>
        Cart Items({cartproduct.length})
      </div>
      {cartproduct.map((product)=>(
        <div className='overviewproducts' key={product._id}>
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