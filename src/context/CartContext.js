
import React, { useState } from 'react'

const CartContext = React.createContext([])

const CartProvider = ( {defaultValue = [], children} ) => {

    const [cart, setCart] = useState(defaultValue)

    //Agregar un item al carrito
    const addItem = (item, quantity) => { 
        let itemToAdd = {...item}
        itemToAdd.quantity = quantity
        setCart(cart.concat(itemToAdd))
    }

    //Eliminar un item específico
    const removeItem = (itemId) => { setCart(cart.filter( el => el.id !== itemId )) }

    //Vaciar el carrito completo
    const clear = () => { setCart([]) }

    //Verificar si un item está en el carrito
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
/* 
const toExport = {
    CartProvider,
    CartContext
}
 */

export { CartProvider, CartContext }