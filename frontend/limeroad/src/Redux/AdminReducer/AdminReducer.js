import { DELETE_PRODUCT_SUCCESS, GET_ALLPRODUCTS_FAILURE, GET_ALLPRODUCTS_REQUEST, GET_ALLPRODUCTS_SUCCESS, PATCH_PRODUCT_SUCCESS } from "./AdminActionType";

const initialState = {
    isLoading:false,
    isError:false,
    allproducts:[]
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_ALLPRODUCTS_REQUEST :
            return {...state,isLoading:true}
        case GET_ALLPRODUCTS_SUCCESS :
            return {...state,isLoading:false,allproducts:payload}
        case GET_ALLPRODUCTS_FAILURE :
            return {...state,isLoading:false,isError:true}
        case DELETE_PRODUCT_SUCCESS :
            return {...state,isLoading:false}
        case PATCH_PRODUCT_SUCCESS :
            return {...state,isLoading:false}

        default:return state;
    }
}