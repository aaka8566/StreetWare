import axios from "axios"
import { EDIT_PRODUCT_SUCCESS, FAILURE, GET_PRODUCT_SUCCESS, REQUEST } from "./CartActionType"


export const getcartproduct=(dispatch)=>{
    dispatch({type:REQUEST})
    axios.get(`https://worrisome-goat-flip-flops.cyclic.app/cart/`,
    {headers: {'Content-Type': 'application/json',"Authorization":
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDU2ODA1ZGRiYTNlMTIzZDA2N2NiODgiLCJpYXQiOjE2ODMzOTA2MTh9.zvp9647VOW3l1pbMfjFAcWM3lHKm6auJ-ihJtmh6dwQ"}}
    )
    .then((res)=>dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data}))
    .catch(()=>dispatch({type:FAILURE}))
}

export const editData=(data,id)=>(dispatch)=>{
    dispatch({type:REQUEST})
    return axios.patch(`https://worrisome-goat-flip-flops.cyclic.app/cart/increase/${id}`,data,
    {headers: {'Content-Type': 'application/json',"Authorization":
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDU2ODA1ZGRiYTNlMTIzZDA2N2NiODgiLCJpYXQiOjE2ODMzOTA2MTh9.zvp9647VOW3l1pbMfjFAcWM3lHKm6auJ-ihJtmh6dwQ"}})
    .then(()=>dispatch({type:EDIT_PRODUCT_SUCCESS}))
    .catch(()=>dispatch({type:FAILURE}))
}