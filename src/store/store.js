import { combineReducers, createStore } from "redux"
import {userReducer} from "./userSlice/userSlice"
import {productReducer} from "./productSlice/productSlice"
import {cartReducer} from "./cartSlice/cartSlice"
import { adminReducer } from "./adminSlice/adminSlice"

const reducer =combineReducers(
    {
        users:userReducer,
        products:productReducer,
        cart:cartReducer,
        admins:adminReducer
    }
)
export const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

