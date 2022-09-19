
import ItemCount from "./ItemCount"
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";



const ItemDetail = ({id, stock, brand, image, model, price, head_size, length, weight, tension, balance, beam_width, composition, flex, grip_type, power_lv, swing_sp, swing_we, string_pa}) => {

    //Esta funcion va a definir el valor a mostrar en el contador del ItemCount dependiendo si existe en el cart
    //Agrega la posibilidad de modificar la cantidad seleccionada de un producto
    const initial = (id) =>  
        (cart.find(el => parseInt(el.id) === parseInt(id)) ?
            cart.find(el => parseInt(el.id) === parseInt(id)).quantity :
            0
        )
    
    //Estado que almacena la cantidad de productos agregada en ItemCount
    //dentro del elemento padre ItemDetail (de acuerdo a la consigna)
    const [contadorPadre, setContadorPadre] = useState(0)

    //Objeto que se va agregar al carrito creado a partir de las props
    const productoDetallado = {id, stock, brand, image, model, price, head_size, length, weight, tension, balance, beam_width, composition, flex, grip_type, power_lv, swing_sp, swing_we, string_pa}

    const {cart, addItem, isInCart, removeItem /*, clear */} = useContext(CartContext)

    //Estado para definir si el ItemCount está visible o no
    const [mostrarRutaCarrito, setMostrarRutaCarrito] = useState(true)

    //Esta funcion agrega un objeto nuevo al cart o modifica la cantidad
    const onAdd = (quantity) => { 
        if (isInCart(id)) {
            quantity === 0 ? 
                removeItem(id)
                :
                cart.find(el => parseInt(el.id) === parseInt(id)).quantity = quantity
            } else {
                addItem(productoDetallado, quantity)
            }
        setMostrarRutaCarrito(false)
        setContadorPadre(quantity)
    }


    //Esta funcion es para volver a mostrar el ItemCount
    const modificarCantidad = () => { 
        setMostrarRutaCarrito(true)
    }


    // estilo sacado de https://app.tailwinduikit.com/components

    return (
        <div>
            {brand ? (
                        <div className="my-20 md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 bg-white">
                        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                            <img className="w-full" alt="imagen raqueta" src={image} />
                        </div> 
                        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                            <div className="border-b border-gray-200 pb-6">
                                <p className="text-sm leading-none text-gray-600 dark:text-gray-300 "> {brand} 2022</p>
                                <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2"> {brand} {model} </h1>
                            </div>
                            <div className="border-b border-gray-200 pb-6">
                                <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">Precio: {price}</p>
                                <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">Tamaño cabeza: {head_size}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Largo: {length}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Peso: {weight}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Tension: {tension}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Balance: {balance}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Grosor del marco: {beam_width}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Material: {composition}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Rigidez: {flex}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Tipo de grip: {grip_type}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Nivel de poder: {power_lv}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Distribucion de cuerdas: {string_pa}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Tipo de Swingt: {swing_sp}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Swing weight: {swing_we}</p>
                            </div>
                            <div className="flex items-center border-b border-gray-200 pb-6">
                            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">({stock} u. en stock)</p>
                            </div>
                            <div className="flex items-center border-b border-gray-200 pb-6">
                                {
                                mostrarRutaCarrito ?
                                    (<ItemCount key={id} initial = { initial(id) } stock={stock} onAdd = {onAdd}/>) 
                                    :
                                    (<div>
                                        <span className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300 mx-5">{contadorPadre} producto/s agregado/s</span>
                                        <Link to={`/carrito`}><button className="btn btn-outline bg-green-300 m-3">Ir al carrito</button></Link>
                                        <button onClick={modificarCantidad} className="btn btn-outline bg-red-300 m-3">Modificar cantidad</button>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                ) : (<h1 className='text-5xl m-5 text-primary-content'>Cargando...</h1>)}
        </div>
        )
}

export default ItemDetail