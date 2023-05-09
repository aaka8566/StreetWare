import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,useLocation } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
  const  {isAuth}=useSelector((store)=>store.AuthReducer);
const location=useLocation();
console.log(location,"pri");

  if(isAuth){
  return children;
}
  return <Navigate to="/login" state={location.pathname}/>
}

