import { legacy_createStore,combineReducers ,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {reducer as AdminReducer} from "./AdminReducer/AdminReducer"
import {reducer as CartReducer} from "./CartReducer/CartReducer"
import {reducer as AuthReducer} from "./AuthReducer/AuthReducer"
import {reducer as OrderReducer} from "./OrderReducer/OrderReducer"
import {reducer as ProductReducer} from "./ProductReducer/ProductReducer"

const rootreducer=combineReducers({
AdminReducer,
CartReducer,
AuthReducer,
OrderReducer,
ProductReducer
});
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk));