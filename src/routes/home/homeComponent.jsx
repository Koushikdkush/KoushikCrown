import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import DirectoryComponet from '../../components/directory/directoryComponet';
//import { Outlet } from 'react-router-dom';
import { selectCurrentUser } from '../../store/user/user.selector'
const Home = () => {
 const currentUser=useSelector(selectCurrentUser)
  return (
    <div>
       {  
          currentUser ? (<h2>Welcome: {currentUser.displayName}</h2>):(<h2></h2>)
       }
     <Outlet/>
    <DirectoryComponet ></DirectoryComponet>
   
    </div>
  );
}

export default Home;