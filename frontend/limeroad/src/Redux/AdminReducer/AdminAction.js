import axios from "axios"
import { ADD_ALLPRODUCTS_FAILURE, ADD_ALLPRODUCTS_REQUEST, ADD_ALLPRODUCTS_SUCCESS, DELETE_PRODUCT_SUCCESS, GET_ALLPRODUCTS_FAILURE, GET_ALLPRODUCTS_REQUEST, GET_ALLPRODUCTS_SUCCESS, PATCH_PRODUCT_SUCCESS } from "./AdminActionType"




export const getAllProducts = (paramObj=null)=>(dispatch)=>{
    dispatch({type:GET_ALLPRODUCTS_REQUEST});
    return axios
      .get(`https://worrisome-goat-flip-flops.cyclic.app/products`, paramObj)
      .then((res) => {
        console.log(res);
        dispatch({ type: GET_ALLPRODUCTS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_ALLPRODUCTS_FAILURE });
      });
}

export const DeleteProduct = (id) => (dispatch) => {
  dispatch({ type: GET_ALLPRODUCTS_REQUEST});
  axios
    .delete(`https://worrisome-goat-flip-flops.cyclic.app/products/delete/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_PRODUCT_SUCCESS });
      console.log(res);
    })
    .catch(() => {
      dispatch({ type: GET_ALLPRODUCTS_FAILURE });
    });
};

export const editProduct = (dataobj,id)=>(dispatch)=>{
    dispatch({type:GET_ALLPRODUCTS_REQUEST})
    return axios
      .patch(
        `https://worrisome-goat-flip-flops.cyclic.app/products/update/${id}`,
        dataobj
      )
      .then(() => {
        console.log("done");
        dispatch({ type: PATCH_PRODUCT_SUCCESS });
      })
      .catch((err) => dispatch({ type: GET_ALLPRODUCTS_FAILURE }));
}

export const addProduct = (data)=>(dispatch)=>{
    dispatch({type:ADD_ALLPRODUCTS_REQUEST})
    axios.post(`https://worrisome-goat-flip-flops.cyclic.app/products/create`,data)
    .then((res)=>{
        dispatch({type:ADD_ALLPRODUCTS_SUCCESS})
        console.log(res)
    }).catch((err)=>{
        dispatch({type:ADD_ALLPRODUCTS_FAILURE})
    });
}