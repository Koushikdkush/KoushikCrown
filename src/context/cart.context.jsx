import { createContext } from "react"
import { useState, useEffect } from "react";


const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(

        (cartItem) => cartItem.id === productToAdd.id
    )

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemRemove.id
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemRemove.id)

    }
    return cartItems.map((cartItem) => cartItem.id === cartItemRemove.id ?
    { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
)

}

const ClearItemFromCart=(cartItems, productToClear)=>cartItems.filter((cartItem)=>cartItem.id!==productToClear.id)





export const CartContext = createContext({
    isCartOpen: 'false', setIsCartOpen: () => { },
    cartItems: [], 
    addItemToCart: () => { }, cartCount: 0, 
    removeItemCart: () => { },
    ClearItemFromCart:()=>{},
    cartTotal:0
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setcartCount] = useState(0)
    const [cartTotal, setcartTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setcartCount(newCartCount)
    }, [cartItems])


    useEffect(()=>{

        const newCartTotal=cartItems.reduce((total,cartItem)=>total + cartItem.quantity*cartItem.price,0) 
        setcartTotal(newCartTotal)
    },[cartItems])



    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }


    const ClearItemCart = (productToClear) => {
        setCartItems(ClearItemFromCart(cartItems, productToClear))
    }


    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount,removeItemCart,ClearItemCart,cartTotal};
    return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}