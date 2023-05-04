import { getproductfailure,getproductrequest,getproductsuccess } from "./ProductActionType";
import axios from "axios";

const getproductrequestaction=()=>{
    return {type:getproductrequest}
};
const getproductsuccessaction=(payload)=>{
    return {type:getproductsuccess,payload}
};
const getproductfailureaction=()=>{
    return {type:getproductfailure}
};

export const getproductdata=()=>(dispatch)=>{
dispatch(getproductrequestaction());
return axios.get(`https://worrisome-goat-flip-flops.cyclic.app/products`)
.then((res)=>dispatch(getproductsuccessaction(res.data)))
.catch((err)=>dispatch(getproductfailureaction(err)));
}