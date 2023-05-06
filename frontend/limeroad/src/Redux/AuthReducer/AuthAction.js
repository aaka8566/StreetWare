import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./AuthActionType";

export const singUp = (userData) => (dispatch) => {
  // Complete login logic here
  dispatch({ type: SIGNUP_REQUEST });
  return axios
    .post(
      "https://worrisome-goat-flip-flops.cyclic.app/users/register",
      userData
    )
    .then((res) => {
      console.log(res);
      dispatch({ type: SIGNUP_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SIGNUP_FAILED });
    });
};

export const login = (userData) => (dispatch) => {
  // Complete login logic here
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post("https://worrisome-goat-flip-flops.cyclic.app/users/login", userData)
    .then((res) => {
      console.log(res);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
      localStorage.setItem("token", res.data.token);
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAILED });
    });
};
