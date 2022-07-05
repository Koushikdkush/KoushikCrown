import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from '../Categories-preview/Categories-preview.component'
import Category from '../Category/Category.compoent'
import './Shop.style.scss'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { setcategories } from "../../store/category/category.action.js";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Shop = () => {
    const dispatch=useDispatch()
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments()
          //  console.log(categoriesArray)
             dispatch(setcategories(categoriesArray))
        }
        getCategoriesMap()
    }, [])


    return (
        <Routes>
            <Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
            <Route path=":category" element={<Category></Category>}></Route>
        </Routes>
    )
}

export default Shop;