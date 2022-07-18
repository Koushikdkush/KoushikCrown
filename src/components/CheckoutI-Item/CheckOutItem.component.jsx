import './CheckOutItem.style.scss'
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, removeItemCart, ClearItemCart } from '../../store/cart/cart.action'
const CheckOutItem = ({ cartItem }) => {

    const dispatch = useDispatch()
    const { name, imageUrl, price, quantity } = cartItem;
    const CartItems = useSelector(selectCartItems)
    const addItemHandler = () => dispatch(addItemToCart(CartItems, cartItem))
    const removeItemHandler = () => dispatch(removeItemCart(CartItems, cartItem))
    const clearItemHandler = () => dispatch(ClearItemCart(CartItems, cartItem))


    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                {quantity}
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;

                </div>

            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}
export default CheckOutItem;