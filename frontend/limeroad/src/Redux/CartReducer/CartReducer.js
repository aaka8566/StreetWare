import { EDIT_PRODUCT_SUCCESS, FAILURE, GET_PRODUCT_SUCCESS, REQUEST } from "./CartActionType";

const initialstate={
    isLoading:false,
    isError:false,
    cartproduct:[]
}

export const reducer=(state=initialstate,{type,payload})=>{
    switch(type){
            case REQUEST:return{
                ...state,isLoading:true
            }
            case FAILURE:return{
                ...state,isLoading:false,isError:true
            }
            case GET_PRODUCT_SUCCESS:return{
                ...state,isLoading:false,cartproduct:payload
            }
            case EDIT_PRODUCT_SUCCESS:return{
                ...state,isLoading:false
            }


default:return state;
    }
}
