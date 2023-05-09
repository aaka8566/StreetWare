import {
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  LOGOUT_SUCCESS
} from "./AuthActionType";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: localStorage.getItem("token"),
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST: {
      return { ...state, isLoading: true };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case SIGNUP_FAILED: {
      return { ...state, isLoading: false, isError: true };
    }
    case LOGIN_REQUEST: {
        return { ...state, isLoading: true };
      }
      case LOGIN_SUCCESS: {
        return { ...state, isLoading: false, isAuth: true, token: payload };
      }
      case LOGIN_FAILED: {
        return { ...state, isLoading: false, isError: true };
      }
      case LOGOUT_SUCCESS:{return{...state,isAuth:false,token:""}}
    default:
      return state;
  }
};
