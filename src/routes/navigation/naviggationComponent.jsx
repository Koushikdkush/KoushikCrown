import { Outlet, } from "react-router-dom"
import { Fragment } from "react";
import { useSelector,useDispatch} from "react-redux";
import { ReactComponent as Crown } from '../../assest/crown.svg';
import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles'
import { selectCurrentUser } from "../../store/user/user.selector";

import { SignOutStart } from "../../store/user/user.action";
import CartIcon from "../../components/cart-icon/CartIcon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectIsCartOpen } from '../../store/cart/cart.selector'

const NavigationBar = () => {

    const dispatch=useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)
    const SignOutUser=()=>dispatch(SignOutStart)
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

                            <NavLink as='span' onClick={SignOutUser}>
                                SIGN OUT
                            </NavLink>
                        )

                            : (
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