import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
export const PrivateRoute = ({children}) => {
  const  {isAuth}=useSelector((store)=>store.AuthReducer);
if(isAuth){
  return children;
}
  return <Navigate to="/login"/>
}

