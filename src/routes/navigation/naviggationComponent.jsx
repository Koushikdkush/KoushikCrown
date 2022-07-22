import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/CartIcon.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assest/crown.svg'

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const navigate = useNavigate()

  const signOutUser = () => {
    dispatch(signOutStart());
    navigate('/')
  }

  return (
    <Fragment>

      <NavigationContainer>
        <LogoContainer to='/home'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {/* <NavLink to=''>CONTACT</NavLink> */}

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      {
        currentUser ? (<h3>Welcome: {currentUser.displayName.toUpperCase()}</h3>) : (<h3>{''}</h3>)
      }
      <Outlet />

    </Fragment>
  );
};

export default Navigation;