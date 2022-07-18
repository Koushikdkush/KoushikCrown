
import Button from '../buttons/button-component';
import CartItem from '../CartItem/CartItem.compoonenet';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom'
import {selectCartItems } from '../../store/cart/cart.selector'
import {CartDropContainer, EmptyMessage, CartItems} from './cart-dropdown.style'

const CartDropDown = () => {

    const  cartItems  = useSelector(selectCartItems)
    const navigate= useNavigate();
    const navigateHandler=()=>{
        navigate('/checkout')
    }


    return (
        <CartDropContainer>
            < CartItems>
                {
                    cartItems.length ? (cartItems.map((item)=>(
                        <CartItem key={item.id} cartitem={item}></CartItem>

                    ))):(
                        <EmptyMessage>Your car is Empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={navigateHandler}>CHECKOUT</Button>
        </CartDropContainer>
    )

}
export default CartDropDown;