import { USER_ACTION_TYPES } from "./user.type";
const INITIAL_STATE = {
    currentUser: null,
    isLoading:false,
    error:null,
}

export const userReducer = (state=INITIAL_STATE, action) => {
    console.log(action)
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser: payload
            }
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return{
                ...state,currentUser:null
            }
        case USER_ACTION_TYPES.SIGNIN_FAILES:
        case USER_ACTION_TYPES.SIGN_UP_FAILS:
        case USER_ACTION_TYPES.SIGN_OUT_FAILS:
            return{
                ...state,error:payload,
            }
        default:
            return state;
    }
}