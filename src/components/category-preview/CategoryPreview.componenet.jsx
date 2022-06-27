import ProductCard from '../ProductCard/Productcard.componenet';

import './category-preview.styles.scss'
import {Link } from 'react-router-dom'
const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to={title}>{title.toLowerCase()}</Link>
            </h2>
            <div className='preview'>{
                products.filter((_, idx) => idx < 4)
                    .map((product) =>

                        <ProductCard key={product.id} product={product}></ProductCard>

                    )
            }

            </div>
        </div>
    )
}

export default CategoryPreview;