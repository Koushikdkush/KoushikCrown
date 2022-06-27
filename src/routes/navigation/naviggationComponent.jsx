import { Outlet, } from "react-router-dom"
import { Fragment, useContext } from "react";

import { ReactComponent as Crown } from '../../assest/crown.svg';
import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles'
import { UserContext } from "../../context/user.context";
import { signoutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from "../../components/cart-icon/CartIcon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const NavigationBar = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Crown className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop' >Shop</NavLink>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signoutUser}>
                                {''}SIGN OUT</span>
                        ) : (
                            <NavLink to='/auth'>Signin</NavLink>
                        )
                    }
                    <CartIcon></CartIcon>
                </NavLinks>
                {
                    isCartOpen && <CartDropDown></CartDropDown>}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default NavigationBar;