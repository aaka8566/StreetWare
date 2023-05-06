import { getproductfailure,getproductrequest,getproductsuccess } from "./ProductActionType";
const initialstate={
    products:[],
    isloading:false,
    iserror:false
}
export const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case getproductrequest:return{...state,isloading:true}
        case getproductsuccess:return{...state,isloading:false,products:action.payload}
        case getproductfailure:return{...state,iserror:true}
default:return state;
    }
}

