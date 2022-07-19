import { USER_ACTION_TYPES } from "./user.type";
import { createAction } from "../../utils/reducer/reducerutils";

export const setCurrentUser = (user) => {
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

}

export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)

export const googleSigninStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGNIN_START)

export const emailStart = (email, password) => createAction(USER_ACTION_TYPES.EMAIL_SIGNIN_START, { email, password })

export const SiginSuccess = (user) => createAction(USER_ACTION_TYPES.SIGNIN_SUCCESS, user)

export const SigninFails = (error) => createAction(USER_ACTION_TYPES.SIGNIN_FAILES, error)

export const SignUpStart = (email, password, displayname) =>
 createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayname })

export const SignUpSuccess = (user, addtionalDetails) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, addtionalDetails })



export const SignUpFails = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILS, error)


export const SignOutStart=()=>{
    createAction(USER_ACTION_TYPES.SIGN_OUT_START)

}
export const SignOutSuccess=()=>{
    createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
}

export const SignOutFails=(error)=>{
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILS,error)
}


