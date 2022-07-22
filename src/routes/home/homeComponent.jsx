
import { Outlet } from 'react-router-dom';
import DirectoryComponet from '../../components/directory/directoryComponet';

const Home = () => {

  return (
    <div>
     
     <Outlet/>
    <DirectoryComponet ></DirectoryComponet>
   
    </div>
  );
}

export default Home;