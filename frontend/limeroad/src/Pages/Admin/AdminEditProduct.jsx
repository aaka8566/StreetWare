import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editProduct } from '../../Redux/AdminReducer/AdminAction';
import "./Admin.css";
import { Spinner } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";


const AdminEditProduct = () => {
  const {id} = useParams();
  console.log(id)
  const dispatch = useDispatch();
  const toast = useToast();
  const [data,setData] = useState({});
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    axios
      .get(`https://worrisome-goat-flip-flops.cyclic.app/products/${id}`)
      .then((res) => {
        setLoading(false);
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])
const handleChange = (e)=>{
    const {name,value} = e.target;
    setData((prev)=>{return {...prev,[name]:value}})
}
const handleEdit = (e)=>{
   e.preventDefault();
   dispatch(editProduct(data,id));
   toast({
     title: "Product Edited.",
    //  description: "We've created your account for you.",
     status: "success",
     duration: 5000,
     isClosable: true,
     position: "top",
   });
}
  return loading ? (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="black.500"
      size="xl"
      marginTop="300px"
    />
  ) : (
    <div className="container">
      <h1>Edit Product</h1>
      <div>
        <form className="editproduct">
          <input
            type="text"
            placeholder="Image"
            value={data.image}
            name={"image"}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Title"
            value={data.title}
            name={"title"}
            onChange={handleChange}
          />
          <br />

          <input
            type="number"
            placeholder="Price"
            value={data.price}
            name={"price"}
            onChange={handleChange}
          />
          <br />

          <input
            type="text"
            placeholder="Brand"
            value={data.brand}
            name={"brand"}
            onChange={handleChange}
          />
          <br />

          <select
            type="text"
            value={data.gender}
            name={"gender"}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />

          <input
            type="text"
            placeholder="Model"
            value={data.model}
            name={"model"}
            onChange={handleChange}
          />
          <br />

          <input
            type="text"
            placeholder="Type"
            value={data.type}
            name={"type"}
            onChange={handleChange}
          />
          <br />

          <input
            type="text"
            placeholder="Size"
            value={data.size}
            name={"size"}
            onChange={handleChange}
          />
          <br />

          <input
            type="number"
            placeholder="Discount"
            value={data.offer_percent}
            name={"offer_percent"}
            onChange={handleChange}
          />
          <br />

          <button onClick={handleEdit}>Edit Product</button>
        </form>
      </div>
    </div>
  );
}

export default AdminEditProduct