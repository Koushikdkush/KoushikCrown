import { createAction } from "../../utils/reducer/reducerutils";
import { CATEGORY_ACTION_TYPES } from "./categoryType";


export const setcategories = (categoriesArray) =>
    createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray)