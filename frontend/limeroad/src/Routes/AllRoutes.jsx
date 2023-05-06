import React from 'react'
import {Routes,Route} from "react-router-dom";
import {Home} from "../Pages/HomePage/Home";
import {Cart} from "../Pages/Cart";
import {Payment} from "../Pages/Payment";
import {Products} from "../Pages/Products";
import {Signup} from "../Pages/Signup";
import {AdminHome} from "../Pages/Admin/AdminHome";
import {AdminProducts} from "../Pages/Admin/AdminProducts";

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/payment' element={<Payment/>}></Route>
            <Route path='/adminhome' element={<AdminHome/>}></Route>
            <Route path='/adminproducts' element={<AdminProducts/>}></Route>
        </Routes>
    </div>
  )
}

