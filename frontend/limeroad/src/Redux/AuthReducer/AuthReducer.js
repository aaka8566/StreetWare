import {
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./AuthActionType";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
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
    default:
      return state;
  }
};
