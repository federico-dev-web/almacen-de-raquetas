
import React, { useState } from 'react'

const CartContext = React.createContext([])

const CartProvider = ( {defaultValue = [], children} ) => {

    const [cart, setCart] = useState(defaultValue)

    //Agregar un item al carrito
    const addItem = (item, quantity) => { 
        let itemToAdd = {...item}
        itemToAdd.quantity = quantity
        if (isInCart(itemToAdd.id)) {
            quantity === 0 ? 
                removeItem(itemToAdd.id)
                :
                modifyItem(itemToAdd.id, quantity)
            } else {
                quantity && setCart(cart.concat(itemToAdd))
            }
    }

    //Eliminar un item específico
    const removeItem = (itemId) => {
        setCart( cart.filter( el => parseInt(el.id) !== parseInt(itemId) ) )
    }

    //Vaciar el carrito completo
    const clear = () => { setCart([]) }

    //Verificar si un item está en el carrito
    const isInCart = (id) => cart.some((el) => parseInt(el.id) === parseInt(id))

    //Modificar la cantidad de un item del carrito
    const modifyItem = (id, newQuantity) => {
        let cart2 = [...cart]
        cart2.find(el => parseInt(el.id) === parseInt(id)).quantity = newQuantity
        setCart(cart2)
    }


    const context = {
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        modifyItem
    }

    return (
        <CartContext.Provider value = {context}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }