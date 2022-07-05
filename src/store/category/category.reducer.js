import { CATEGORY_ACTION_TYPES } from "./categoryType";

export const CATEGORIES_INITIAL_STATE = {
    categories: []
}

export const CategoryReducer = (
    
    state = CATEGORIES_INITIAL_STATE, action) => {

    const { type, payload } = action;
    switch (type) {
        case CATEGORY_ACTION_TYPES.SET_CATEGORIES :
            return {
                ...state, categories: payload,
            }
        default:
            return state;

    }

}