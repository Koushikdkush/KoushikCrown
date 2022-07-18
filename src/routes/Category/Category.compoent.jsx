import './category.style.scss'
import { useParams } from 'react-router-dom';
import {  useEffect, useState, Fragment } from 'react';
import Spinner from '../../components/spinner/spinner.component';
import ProductCard from '../../components/ProductCard/Productcard.componenet';
import { selectCategoriesMap,selectCategoriesLoading } from '../../store/category/category.selector';
import { useSelector } from 'react-redux';

const Category = () => {
    const { category } = useParams()

  const categoriesMap=useSelector(selectCategoriesMap);
  const isLoading=useSelector(selectCategoriesLoading)
  const [products, setproducts] = useState(categoriesMap[category])
    useEffect(() => {
        console.log('use effect fired...')
        setproducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <h1 className='category-title'>{category.toUpperCase()}</h1>
            {
              isLoading ? (
              <Spinner/>
              ):(
                <div className='category-container'>
                {
                  products &&
                  products.map((product) => (<ProductCard key={product.id} product={product}></ProductCard>)
                )} </div>
              )}</Fragment>
    )

}
export default Category;