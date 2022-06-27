
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { ShoppingIcon,CartIconContainer,ItemCount} from './cart-icon.style'

import './cart-icon.style'
const CartIcon = () => {
    const { isCartOpen, setIsCartOpen,cartCount } = useContext(CartContext)
    const Toogle = () => setIsCartOpen(!isCartOpen)


    return (
        <CartIconContainer onClick={Toogle}>
            <ShoppingIcon />
            <ItemCount >{cartCount}</ItemCount>
        </CartIconContainer>)

}
export default CartIcon;