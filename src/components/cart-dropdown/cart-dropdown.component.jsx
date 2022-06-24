import './cart-dropdown.style.scss'
import Button from '../buttons/button-component';
import CartItem from '../CartItem/CartItem.compoonenet';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom'

const CartDropDown = () => {

    const { cartItems } = useContext(CartContext)
    const navigate= useNavigate();
    const navigateHandler=()=>{
        navigate('/checkout')
    }


    return (
        <div className='cart-dropdown-container '>
            <div className='cart-items'>
                {
                    cartItems.map((item) => 
                    <CartItem cartitem={item} key={item.id} />)
                }
            </div>
            <Button onClick={navigateHandler}>CHECKOUT</Button>
        </div>
    )

}
export default CartDropDown;