import Directoryitem from "../directory-item/DirectoryItem";
import "./directory.style.scss";

const categories = [
    {
      id: 1, title: 'Hats', imageurl: 'https://i.ibb.co/cvpntL1/hats.png',route:'shop/hats'
    },
    {
      id: 2, title: 'Jackets', imageurl: 'https://i.ibb.co/px2tCc3/jackets.png',route:'shop/jackets'
    },
    {
      id: 3, title: 'Sneaker', imageurl: 'https://i.ibb.co/0jqHpnp/sneakers.png',route:'shop/sneakers'
    },
    {
      id: 4, title: 'Womens', imageurl: 'https://i.ibb.co/GCCdy8t/womens.png',route:'shop/womens'
    }
    , {
      id: 5, title: 'Mens',
      imageurl: 'https://i.ibb.co/R70vBrQ/men.png',route:'shop/mens'
    }
  ]



const DirectoryComponet = () => {
    return (
        <div className="directory-container">
            {
                categories.map((category) => {
                    return (
                        <Directoryitem category={category} key={category.id}></Directoryitem>
                    )
                })

            }
        </div>

    )
}
export default DirectoryComponet;