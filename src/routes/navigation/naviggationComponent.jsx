import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react";

import { ReactComponent as Crown } from '../../assest/crown.svg';
import './navigation.styles.scss'
import { UserContext } from "../../context/user.context";
import { signoutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from "../../components/cart-icon/CartIcon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const NavigationBar = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)


    // console.log(currentUser)
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <Crown className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link to='/shop' className="nav-link">Shop</Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signoutUser}>
                                {''}SIGN OUT</span>
                        ) : (
                            <Link to='/auth' className="nav-link">Signin</Link>
                        )
                    }
                    <CartIcon></CartIcon>
                </div>
                {
                    isCartOpen && <CartDropDown></CartDropDown>}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavigationBar;