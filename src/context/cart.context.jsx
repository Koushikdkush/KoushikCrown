import { createContext } from "react"
import { useState, useReducer } from "react";
import { createAction } from '../utils/reducer/reducerutils'

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

const ClearItemFromCart = (cartItems, productToClear) => cartItems.filter((cartItem) => cartItem.id !== productToClear.id)





export const CartContext = createContext({
    isCartOpen: 'false', setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { }, cartCount: 0,
    removeItemCart: () => { },
    ClearItemFromCart: () => { },
    cartTotal: 0
})



const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_COUNT: 'SET_CART_COUNT',
    SET_CART_TOTAL: 'SET_CART_TOTAL',
};

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};


const CartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state, ...payload
            }
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
}

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    /*  const [isCartOpen, setIsCartOpen] = useState(false);
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
      },[cartItems])*/


    const [{ cartCount, cartTotal, cartItems }, dispatch] = useReducer(
        CartReducer,
        INITIAL_STATE
    );

    const updateCartItemsReducer = (cartItems) => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );

        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );


        const payload = {
            cartItems,
            cartCount: newCartCount,
            cartTotal: newCartTotal,
        };

        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));

    }



    const addItemToCart = (productToAdd) => {
        const newcartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducer(newcartItems)

    }

    const removeItemCart = (productToRemove) => {
        const newcartItems = removeCartItem(cartItems, productToRemove)
        updateCartItemsReducer(newcartItems)
    }


    const ClearItemCart = (productToClear) => {
        const newcartItems = ClearItemFromCart(cartItems, productToClear)
        updateCartItemsReducer(newcartItems)
    }


    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemCart, ClearItemCart, cartTotal };
    return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}