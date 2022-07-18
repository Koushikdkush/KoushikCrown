import { all, call } from 'redux-saga/effects'
import { categoriesSaga } from './category/category.saga'
//generator function..
export function* rootSaga() {

    yield all([call(categoriesSaga)])
}