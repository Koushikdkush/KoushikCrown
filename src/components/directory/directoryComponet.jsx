import CategoryItem from "../category-item/CategoryItem";
import "./directory.style.scss";
const DirectoryComponet = ({ categories }) => {
    return (
        <div className="directory-container">
            {
                categories.map((category) => {
                    return (
                        <CategoryItem category={category} key={category.id}></CategoryItem>
                    )
                })

            }
        </div>

    )
}
export default DirectoryComponet;