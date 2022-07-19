import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import NavigationBar from "./routes/navigation/naviggationComponent";
import Home from "./routes/home/homeComponent";
import Authentication from "./components/authenticate/authenticate.component";
import Shop from "./routes/Shop/Shop.component";
import Checkout from "./routes/Checkouts/Checkout.componenet";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserSession())
  }, [])



  return (
    <Routes>
      <Route path="/" element={<NavigationBar></NavigationBar>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="shop/*" element={<Shop />}> </Route>
        <Route path="auth" element={<Authentication />}> </Route>
        <Route path="checkout" element={<Checkout></Checkout>}></Route>
      </Route>
    </Routes>

  );
}

export default App;
