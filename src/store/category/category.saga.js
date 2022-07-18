import { all, call, takeLatest,put } from 'redux-saga/effects'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { fetchCategoriesSuccess, fetchCategoriesfails} from './category.action'
import { CATEGORY_ACTION_TYPES } from "./categoryType";



export function* fetchCategoryAsync(){
    try{
        const categoriesArray = yield call(getCategoriesAndDocuments,'categories')
       yield put(fetchCategoriesSuccess(categoriesArray))
    }
    catch(error){
        yield put(fetchCategoriesfails(error))
    }
}

export function* onFetchCategories(){
    yield takeLatest(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START,fetchCategoryAsync)
}

export function* categoriesSaga(){
    yield all([call(onFetchCategories)])
}