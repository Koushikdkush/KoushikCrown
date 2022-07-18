import { CART_ACTION_TYPES } from "./cart.type";
import { createAction } from "../../utils/reducer/reducerutils";

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

const ClearItemFromCart = (cartItems, productToClear) => 
cartItems.filter((cartItem) => cartItem.id !== productToClear.id)


export const setIsCartOpen=(boolean)=>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean)


 export const addItemToCart = (cartItems,productToAdd) => {
        const newcartItems = addCartItem(cartItems, productToAdd)
       return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newcartItems)
    }

   export const removeItemCart = (cartItems,productToRemove) => {
        const newcartItems = removeCartItem(cartItems, productToRemove)
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newcartItems)
    }


export const ClearItemCart = (cartItems,productToClear) => {
        const newcartItems = ClearItemFromCart(cartItems, productToClear)
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newcartItems)
    }
