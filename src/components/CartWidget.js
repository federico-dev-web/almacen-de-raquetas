
//import { FaShoppingCart } from 'react-icons/fa'; //carrito vacio
//import { AiOutlineShoppingCart } from 'react-icons/ai'; //carrito lleno
import { BsCart4 } from "react-icons/bs"; //carrito con rejas
//import { TiShoppingCart } from "react-icons/ti"; //carrito con rejas bold
import { CartContext } from '../context/CartContext';
import { useContext, useState, useEffect } from 'react'



const CartWidget = () => {


    const [cartCount, setCartCount] = useState(0)

    const { cart } = useContext(CartContext)

    //agrego el effect para renderizar los cambios de "cart" en el navbar
    useEffect(
        () => {
            setCartCount( cart.reduce((acc, item)=>acc+item.quantity,0) )
        }
        , [cart]
    )


    return (
    <div className="flex-row"> 
        <BsCart4 className= "inline"/>
        <span className={cartCount===0 ? "hidden" : "badge badge-sm indicator-item mx-3"}>{cartCount}</span>
    </div>
    )
}

export default CartWidget


