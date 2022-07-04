import { createAction } from "../../utils/reducer/reducerutils";
import { CATEGORY_ACTION_TYPES } from "./categoryType";


export const setCategoriesMap = (categoriesMap) =>
    createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap)