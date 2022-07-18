
import { Fragment } from 'react';
import CategoryPreview from '../../components/category-preview/CategoryPreview.componenet.jsx'
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesLoading } from '../../store/category/category.selector'
import Spinner from '../../components/spinner/spinner.component.jsx';
const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesLoading)
    return (
        <Fragment>
            {
                isLoading ? (<Spinner />) : (
                    Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title]
                        return <CategoryPreview key={title} products={products} title={title}></CategoryPreview>
                    })
                )}
        </Fragment>
    )
}

export default CategoriesPreview;