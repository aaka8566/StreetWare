import React, { useEffect} from 'react'
import { CloseIcon,AddIcon,MinusIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react'
import "../Components/ProductComponents/CartComponents/cart.css"
import Bill from '../Components/ProductComponents/CartComponents/Bill';
import axios from "axios"
import { editData, getcartproduct } from '../Redux/CartReducer/CartAction';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';



export const Cart = () => {

 
    
const dispatch=useDispatch()

useEffect(()=>{
  dispatch(getcartproduct)
},[])

const {cartproduct}=useSelector(store=>store.CartReducer)



const Handlclick=(id,val)=>{
 
  let obj={};
    cartproduct.filter((el)=>{
    if(el._id===id){
 obj={Quantity:Number(el.Quantity)+val}
      return{...el,Quantity:Number(el.Quantity)+val}
    }
    return el;
  });

 
 dispatch(editData(obj,id)).then(()=>dispatch(getcartproduct))
 
}

const handleDelete=(id)=>{
  axios.delete(`https://worrisome-goat-flip-flops.cyclic.app/cart/delete/${id}`,
  {headers: {'Content-Type': 'application/json',"Authorization":
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDU2ODA1ZGRiYTNlMTIzZDA2N2NiODgiLCJpYXQiOjE2ODMzOTA2MTh9.zvp9647VOW3l1pbMfjFAcWM3lHKm6auJ-ihJtmh6dwQ"}})
  .then(()=>dispatch(getcartproduct))
}


    let total=0;
  for (let el of cartproduct){
total+=(el.Quantity*el.price)
  }


  
if(cartproduct.length===0)return(
  <div>
    <h1>No item in the cart</h1>
  <Link to="/products"><button style={{backgroundColor:"rgba(56, 145, 36, 0.909)",color:"white",padding:"10px 20px",marginTop:"20px",borderRadius:'10px'}}>Continue </button>
</Link>
  </div>
)
if(cartproduct.length!==0)
  return ( 
    <div className='fulldisplay'  >
    <div className='cart' >
      <div className='products'>

   {cartproduct?.map((product)=>(    
        <div className='selectedProductCard' key={product._id} >
       <div className='productimage'>
         <img src={product.image} alt='prod' style={{width:"100%"}} />
       </div>
       <div className='cartproductdetails' >
       <div className='part1'>
       <div>
       <h3>{product.title}</h3>
       <p style={{fontSize:"15px"}}>by {product.brand}</p>
       </div>
       <p>size: <b>{product.size[0]}</b></p>
       <p>quantity:  <IconButton aria-label='Search database' onClick={()=>Handlclick(product._id,1)} bg='white' icon={<AddIcon/>} />  {product.Quantity}  
       <IconButton aria-label='Search database' isDisabled={product.Quantity===1} onClick={()=>Handlclick(product._id,-1)}  bg='white' icon={<MinusIcon/>} /></p>
       </div>
       <div className='part2'>
       <IconButton aria-label='Search database'  bg='white' icon={<CloseIcon/>} onClick={()=>handleDelete(product._id)} /> 
        <div className='price'>
         <h1 style={{fontSize:"20px"}}>{(product.price*product.Quantity)}</h1>
         <p style={{textDecoration:"line-through",fontSize:"15px"}}>{(product.before_disc*product.Quantity)}</p>
         </div>
         <p>free shipping</p>
       </div>
       </div>
           </div>
        
   ))}
   </div>
    <div className='billing'>
      <Bill total={total}/>
    </div>
  </div>
  </div>
  
 
  )
}

