import { ReactComponent as Shpicon } from '../../assest/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'


import './cart-icon.style.scss'
const CartIcon = () => {
    const { isCartOpen, setIsCartOpen,cartCount } = useContext(CartContext)
    const Toogle = () => setIsCartOpen(!isCartOpen)


    return (
        <div className='cart-icon-container' onClick={Toogle}>
            <Shpicon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>)

}
export default CartIcon;