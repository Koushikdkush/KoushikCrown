import { combineReducers } from "redux";
import {userReducer} from './user/user-reducer'
import { CategoryReducer } from "./category/category.reducer";


export const RootReducer=combineReducers({
    user:userReducer,
    categories:CategoryReducer,

})