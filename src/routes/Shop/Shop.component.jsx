import { Route,Routes } from 'react-router-dom'
import CategoriesPreview from '../Categories-preview/Categories-preview.component'
import Category from '../Category/Category.compoent'
import './Shop.style.scss'

const Shop = () => {

    return(
        <Routes>
            <Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
            <Route path=":category" element={<Category></Category>}></Route>
        </Routes>
    )
}

export default Shop;