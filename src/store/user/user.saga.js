import { all, call, put, takeLatest } from 'redux-saga/effects'
import { USER_ACTION_TYPES } from './user.type'
import { SiginSuccess, SigninFails, SignUpSuccess, SignUpFails,SignOutFails,SignOutSuccess } from './user.action'
import {
    getCurrentUser, CreateUserdocFromAuth,
    signInWithGooglePopup, siginAuthUserEmailandPassword,
    createAuthUserWithEmailandPassword,signoutUser

} from '../../utils/firebase/firebase.utils'

export function* getSnapShotFromUserAuth(userAuth, AddtionalDetails) {
    try {
        const userSnapShot = yield call(CreateUserdocFromAuth, userAuth, AddtionalDetails)
        console.log(userSnapShot)
        console.log(userSnapShot.data())
        yield (put(SiginSuccess({ id: userSnapShot.id, ...userSnapShot.data() })))
    }
    catch (error) {
        yield put(SigninFails(error))
    }
}

export function* Signout(){
    try {
        yield call(signoutUser)
        yield  put(SignOutSuccess())
    } catch (error) {
        yield put(SignOutFails(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser)
        if (!userAuth) return;
        yield call(getSnapShotFromUserAuth, userAuth)
    }
    catch (error) {
        yield put(SigninFails(error))
    }
}


export function* SignGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup)
        yield call(getSnapShotFromUserAuth, user)
    } catch (error) {
        yield put(SigninFails(error))
    }
}

export function* signUp({ payload: { email, password, displayname } }) {
    try {
        const { user } = yield call(createAuthUserWithEmailandPassword, email, password)
        yield put(SignUpSuccess(user, { displayname }))
    }
    catch (error) {
        yield call(SignUpFails(error))
    }
}

export function* SignEmail({ payload: { email, password } }) {
    try {
        const { user } = yield call(
            siginAuthUserEmailandPassword,
            email, password,
        )
        yield call(getSnapShotFromUserAuth, user)
    } catch (error) {
        yield call(SigninFails(error))
    }
}

export function* SignAftersignUp({ payload: { user, AddtionalDetails } }) {
    yield call(getSnapShotFromUserAuth, user, AddtionalDetails)
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGNIN_START, SignGoogle)
}



export function* onGoogleSignInWithEmailStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGNIN_START, SignEmail)
}


export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}


export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}


export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, SignAftersignUp)
}




export function* onSignOutStart(){
    yield  takeLatest(USER_ACTION_TYPES.SIGN_OUT_START,Signout)
}




export function* userSaga() {
    yield all([call(onCheckUserSession),
    call(onGoogleSignInStart), call(onGoogleSignInWithEmailStart),
    call(onSignUpStart), call(onSignUpSuccess),
    call(onSignOutStart)
    ])
}