
import ItemCount from "./ItemCount"
import { useContext, useState } from 'react'
import toExport from '../context/CartContext';
import { Link } from "react-router-dom";



const ItemDetail = ({id, stock, brand, image, model, price, head_size, length, weight, tension, balance, beam_width, composition, flex, grip_type, power_lv, swing_sp, swing_we, string_pa}) => {
    
    const productoDetallado = {}
    productoDetallado.id = id
    productoDetallado.stock = stock
    productoDetallado.brand= brand
    productoDetallado.image= image
    productoDetallado.model= model
    productoDetallado.price= price
    productoDetallado.head_size= head_size
    productoDetallado.length= length
    productoDetallado.weight= weight
    productoDetallado.tension= tension
    productoDetallado.balance= balance
    productoDetallado.beam_width= beam_width
    productoDetallado.composition= composition
    productoDetallado.flex= flex 
    productoDetallado.grip_type= grip_type
    productoDetallado.power_lv= power_lv
    productoDetallado.swing_sp= swing_sp
    productoDetallado.swing_we= swing_we 
    productoDetallado.string_pa = string_pa

    const {addItem, isInCart /*, removeItem, clear */} = useContext(toExport.CartContext)

    const [mostrarRutaCarrito, setMostrarRutaCarrito] = useState(true)

    const onAdd = (quantity) => { 
        isInCart(id) || addItem(productoDetallado, quantity)
        setMostrarRutaCarrito(false)
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
                                    (<ItemCount key={id} initial = {0} stock={stock} onAdd = {onAdd}/>) 
                                    :
                                    (<Link to={`/carrito`}><button className="btn btn-outline bg-green-300 my-3">Ir al carrito</button></Link>)
                                }
                            </div>
                        </div>
                    </div>
                ) : (<h1 className='text-5xl m-5 text-primary-content'>Cargando...</h1>)}
        </div>
        )
}

export default ItemDetail