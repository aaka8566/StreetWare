import { getproductfailure,getproductrequest,getproductsuccess ,addtocartsuccess} from "./ProductActionType";
const initialstate={
    products:[],
    isloading:false,
    iserror:false,
    isadded:false
}
export const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case getproductrequest:return{...state,isloading:true,isadded:true}
        case getproductsuccess:return{...state,isloading:false,products:action.payload}
        case getproductfailure:return{...state,iserror:true}
        case addtocartsuccess:return{...state,isloading:false,isadded:false}
default:return state;
    }
}

