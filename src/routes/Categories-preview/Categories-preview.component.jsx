
import { Fragment } from 'react';
import CategoryPreview from '../../components/category-preview/CategoryPreview.componenet.jsx'
import { useSelector } from 'react-redux';
import {selectCategoriesMap} from '../../store/category/category.selector'

const CategoriesPreview = () => {
   const categoriesMap=useSelector(selectCategoriesMap)
    return (

        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products=categoriesMap[title]
                    return <CategoryPreview key={title} products={products} title={title}></CategoryPreview>
                })

            }

        </Fragment>
    )
}

export default CategoriesPreview;