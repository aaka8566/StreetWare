import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/AdminReducer/AdminAction';


const initialState ={
    image : "",
    title:"",
    price:0,
    brand:"",
    gender:"",
    model:"",
    type:"",
    size:"",
    offer_percent:0
}

const AdminAddProducts = () => {

const dispatch = useDispatch();
const[product,setProduct] = useState(initialState);
const handleAdd = (e)=>{
  e.preventDefault();
  dispatch(addProduct(product));
  setProduct(initialState);
}

const handleChange=(e)=>{
const {name,value}= e.target;
  setProduct((prev)=>{
    return {...prev,[name]:value}
  })
 }

return (
  <div className="container">
    <h1>Add Product</h1>
    <div>
      <form className="editproduct">
        <input
          type="text"
          placeholder="Image"
          value={product.image}
          name={"image"}
          onChange={(e)=>{handleChange(e)}}
        />
        <br />
        <input
          type="text"
          placeholder="Title"
          value={product.title}
          name={"title"}
          onChange={(e)=>{handleChange(e)}}
        />
        <br />

        <input
          type="number"
          placeholder="Price"
          value={product.price}
          name={"price"}
          onChange={(e)=>{handleChange(e)}}
        />
        <br />

        <input
          type="text"
          placeholder="Brand"
          value={product.brand}
          name={"brand"}
          onChange={(e)=>{handleChange(e)}}
        />
        <br />

        <select
          type="text"
          value={product.gender}
          name={"gender"}
          onChange={(e)=>{handleChange(e)}}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />

        <input
          type="text"
          placeholder="Model"
          value={product.model}
          name={"model"}
          onChange={(e)=>{handleChange(e)}}
        />
        <br />

        <input
          type="text"
          placeholder="Type"
          value={product.type}
          name={"type"}
          onChange={(e)=>{handleChange(e)}}
        />
        <br />

        <input
          type="text"
          placeholder="Size"
          value={product.size}
          name={"size"}
          onChange={(e)=>{handleChange(e)}}
        />
        <br />

        <input
          type="number"
          placeholder="Discount"
          value={product.offer_percent}
          name={"offer_percent"}
          onChange={(e)=>{handleChange(e)}}
        />
        <br />

        <button onClick={handleAdd}>Add Product</button>
      </form>
    </div>
  </div>
);
  
}

export default AdminAddProducts;