import { combineReducers } from "redux";
import {userReducer} from './user/user-reducer'
import { CategoryReducer } from "./category/category.reducer";
import { CartReducer } from "./cart/cart.reducer";

export const RootReducer=combineReducers({
    user:userReducer,
    categories:CategoryReducer,
    cart:CartReducer,

})