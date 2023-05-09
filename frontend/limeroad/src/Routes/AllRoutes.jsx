

import React from 'react'


import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/HomePage/Home";
import { Cart } from "../Pages/Cart";
import { Payment } from "../Pages/Payment";
import { Products } from "../Pages/Products";
import { Signup } from "../Pages/Signup";
import { AdminHome } from "../Pages/Admin/AdminHome";
import { AdminProducts } from "../Pages/Admin/AdminProducts";
import { Login } from "../Pages/Login";
import { Men } from '../Pages/HomePage/MensPage';
import { Women } from '../Pages/HomePage/WomenPage';

import AdminLogin from '../Pages/Admin/AdminLogin';
import AdminAddProducts from '../Pages/Admin/AdminAddProducts';
import AdminEditProduct from '../Pages/Admin/AdminEditProduct';
import { PrivateRoute } from './PrivateRoute';





export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/products" element={<Products />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/cart" element={
         <PrivateRoute>
        <Cart />
        </PrivateRoute>
        }></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/adminhome" element={<AdminHome />}></Route>
        <Route path="/adminproducts" element={<AdminProducts />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Men />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/addproduct" element={<AdminAddProducts/>}></Route>
        <Route path="/editproduct/:id" element={<AdminEditProduct />}></Route>
      </Routes>
    </div>
  );
};

