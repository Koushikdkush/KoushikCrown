
import { createAction } from "../../utils/reducer/reducerutils";
import { CATEGORY_ACTION_TYPES } from "./categoryType";



export const setcategories = (categoriesArray) =>
    createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray)


export const fetchCategoriesStart=()=>{
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START)
}

export const fetchCategoriesSuccess=(categoriesArray)=>{
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS
        ,categoriesArray)
}
export const fetchCategoriesfails=(error)=>{
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILS
        ,error);
}

