import './category-item.style.scss'
const CategoryItem =({category})=>{
    const{id,title,imageurl}=category;
    return(
        <div className="category-container" key={id}>
            <div className='background-image'
                style={
                    {
                        backgroundImage: `url(${imageurl})`
                    }
                }
            >
            </div>
            <div className="category-body-contanier">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem;