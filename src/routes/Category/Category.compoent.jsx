import './category.style.scss'
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState, Fragment } from 'react';
import { CategoriesContext } from '../../context/CategoriesContext';
import ProductCard from '../../components/ProductCard/Productcard.componenet';
import { selectCategoriesMap } from '../../store/category/category.selector';
import { useSelector } from 'react-redux';


const Category = () => {
    const { category } = useParams()
  //  const { categoriesMap } = useContext(CategoriesContext)
  const categoriesMap=useSelector(selectCategoriesMap);
    const [products, setproducts] = useState(categoriesMap[category])
    



    useEffect(() => {
        setproducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <h1 className='category-title'>{category.toUpperCase()}</h1>
            <div className='category-container'>

                {
                    products &&
                    products.map((product) => (<ProductCard key={product.id} product={product}></ProductCard>)
                    )}
            </div></Fragment>
    )


}
export default Category;