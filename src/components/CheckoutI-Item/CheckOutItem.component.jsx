import './CheckOutItem.style.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckOutItem = ({ cartItem }) => {

    const { name, imageUrl, price, quantity } = cartItem;
    const { ClearItemCart, addItemToCart, removeItemCart } = useContext(CartContext);
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItemCart(cartItem)}>
                    &#10094;
                </div>
                {quantity}
                <div className='arrow' onClick={() => addItemToCart(cartItem)}>
                    &#10095;

                </div>

            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => ClearItemCart(cartItem)}>&#10005;</div>
        </div>
    )
}
export default CheckOutItem;