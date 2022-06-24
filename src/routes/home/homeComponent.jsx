import { Outlet } from 'react-router-dom';
import DirectoryComponet from '../../components/directory/directoryComponet';
//import { Outlet } from 'react-router-dom';
const Home = () => {
  const categories = [
    {
      id: 1, title: 'Hats', imageurl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id: 2, title: 'Jackets', imageurl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: 3, title: 'Sneaker', imageurl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: 4, title: 'Womens', imageurl: 'https://i.ibb.co/GCCdy8t/womens.png'
    }
    , {
      id: 5, title: 'Mens',
      imageurl: 'https://i.ibb.co/R70vBrQ/men.png'
    }
  ]
  return (
    <div>
     <Outlet/>
    <DirectoryComponet categories={categories}></DirectoryComponet>
   
    </div>
  );
}

export default Home;