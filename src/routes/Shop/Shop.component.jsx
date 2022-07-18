import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from '../Categories-preview/Categories-preview.component'
import Category from '../Category/Category.compoent'
import './Shop.style.scss'

import {fetchCategoryAsync} from "../../store/category/category.saga.js";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Shop = () => {
    const dispatch=useDispatch()
    useEffect(() => {
        const getCategoriesMap = async () => {
             dispatch(fetchCategoryAsync())
        }
    
    }, [])


    return (
        <Routes>
            <Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
            <Route path=":category" element={<Category></Category>}></Route>
        </Routes>
    )
}

export default Shop;