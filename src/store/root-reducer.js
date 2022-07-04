import { combineReducers } from "redux";
import {userReducer} from './user/user-reducer'
import { CategoryReducer } from "./category/category.reducer";


export const rootReducer=combineReducers({
    user:userReducer,
    categories:CategoryReducer,

})