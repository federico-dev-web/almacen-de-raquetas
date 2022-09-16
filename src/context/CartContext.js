
import React, { useState } from 'react'

const CartContext = React.createContext([])

const CartProvider = ( {defaultValue = [], children} ) => {

    const [cart, setCart] = useState(defaultValue)

    const addItem = (item, quantity) => { 
        let itemToAdd = {...item}
        itemToAdd.quantity = quantity
        setCart(cart.concat(itemToAdd))
    }

    const removeItem = (itemId) => { setCart(cart.filter( el => el.id !== itemId )) }

    const clear = () => { setCart([]) }

    const isInCart = (id) => cart.find((el) => parseInt(el.id) === parseInt(id)) ? true : false;


    const context = {
        cart,
        addItem,
        removeItem,
        clear,
        isInCart
    }

    return (
        <CartContext.Provider value = {context}>
            {children}
        </CartContext.Provider>
    )

}

const toExport = {
    CartProvider,
    CartContext
}


export default toExport