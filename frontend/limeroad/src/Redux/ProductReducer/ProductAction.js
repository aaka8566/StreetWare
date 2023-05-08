import { getproductfailure,getproductrequest,getproductsuccess,addtocartsuccess } from "./ProductActionType";
import axios from "axios";

const getproductrequestaction=()=>{
    return {type:getproductrequest}
};
const getproductsuccessaction=(payload)=>{
    return {type:getproductsuccess,payload}
};
const addtocartsuccessaction=()=>{
    return {type:addtocartsuccess}
};
const getproductfailureaction=()=>{
    return {type:getproductfailure}
};

export const getproductdata=(obj=null)=>(dispatch)=>{
dispatch(getproductrequestaction());
return axios.get(`https://lavender-pelican-hem.cyclic.app/products`,
{
    params:obj,

})
.then((res)=>{dispatch(getproductsuccessaction(res.data))})
.catch((err)=>dispatch(getproductfailureaction(err)));
}

export const addtocartdata=(obj)=>(dispatch)=>{
    
    dispatch(getproductrequestaction());
    return axios.post(`https://worrisome-goat-flip-flops.cyclic.app/cart/add`,obj,
    {headers: {'Content-Type': 'application/json',"Authorization":
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDU2ODA1ZGRiYTNlMTIzZDA2N2NiODgiLCJpYXQiOjE2ODMzOTA2MTh9.zvp9647VOW3l1pbMfjFAcWM3lHKm6auJ-ihJtmh6dwQ"}},
)
    .then((res)=>dispatch(addtocartsuccessaction()))
    .catch((err)=>dispatch(getproductfailureaction(err)));
    }