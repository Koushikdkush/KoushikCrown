import './Checkout.style.scss'
import { useSelector } from 'react-redux';
import { selectCartItems,selectCartTotal  } from '../../store/cart/cart.selector'
import CheckOutItem from '../../components/CheckoutI-Item/CheckOutItem.component';
import Payment from '../../components/payment/payment-form.componet';
const Checkout = () => {

    const cartItems=useSelector(selectCartItems)
    const cartTotal=useSelector(selectCartTotal)

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map((cartItem) => {

                    return (
                        <CheckOutItem key={cartItem.id} cartItem={cartItem}></CheckOutItem>
                    )
                })
            }
            <span className='total'>Total:${cartTotal}</span>
            <Payment></Payment>
        </div>
    )
}
export default Checkout;