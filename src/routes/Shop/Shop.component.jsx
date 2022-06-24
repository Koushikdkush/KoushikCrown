import { Route,Routes } from 'react-router-dom'
import CategoriesPreview from '../Categories-preview/Categories-preview.component'
import './Shop.style.scss'

const Shop = () => {

    return(
        <Routes>
            <Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
        </Routes>
    )
}

export default Shop;