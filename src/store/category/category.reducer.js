import { CATEGORY_ACTION_TYPES } from "./categoryType";

export const CATEGORIES_INITIAL_STATE = {
    categories: [], isLoading: false, error: null,
}

export const CategoryReducer = (

    state = CATEGORIES_INITIAL_STATE, action) => {

    const { type, payload } = action;
    switch (type) {
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {
                ...state, isLoading: true,
            }
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state, categories: payload, isLoading: false,
            }
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILS:
            return {
                ...state, error: payload, isLoading: false,
            }
        default:
            return state;

    }

}