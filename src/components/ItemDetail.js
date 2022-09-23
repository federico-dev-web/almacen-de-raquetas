
import ItemCount from "./ItemCount"
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from "react-router-dom"




const ItemDetail = ( productoDetallado ) => {

    //Esta funcion va a definir el valor a mostrar en el contador del ItemCount dependiendo si existe en el cart
    //Agrega la posibilidad de modificar la cantidad seleccionada de un producto
    const initial = (id) =>  
        (
            cart.find(el => el.id === id) ?
            cart.find(el => el.id === id).quantity :
            0
        )
    
    //Estado que almacena la cantidad de productos agregada en ItemCount
    //dentro del elemento padre ItemDetail (de acuerdo a la consigna)
    const [contadorPadre, setContadorPadre] = useState(0)

    const { cart, addItem } = useContext(CartContext)

    //Estado para definir si el ItemCount está visible o no
    const [mostrarRutaCarrito, setMostrarRutaCarrito] = useState(true)

    //Esta funcion se ejecuta cuando el comprador "agrega al carrito"
    //En la misma se modifican estados que renderizan elementos
    const onAdd = (quantity) => { 
        addItem(productoDetallado, quantity)
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
            {productoDetallado.brand ? (
                        <div className="my-20 md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 bg-white">
                        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                            <img className="w-full" alt="imagen raqueta" src={productoDetallado.image} />
                        </div> 
                        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                            <div className="border-b border-gray-200 pb-6">
                                <p className="text-sm leading-none text-gray-600 dark:text-gray-300 "> {productoDetallado.brand} 2022</p>
                                <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2"> {productoDetallado.brand} {productoDetallado.model} </h1>
                            </div>
                            <div className="border-b border-gray-200 pb-6">
                                <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">Precio: {productoDetallado.price}</p>
                                <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">Tamaño cabeza: {productoDetallado.head_size}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Largo: {productoDetallado.length}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Peso: {productoDetallado.weight}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Tension: {productoDetallado.tension}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Balance: {productoDetallado.balance}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Grosor del marco: {productoDetallado.beam_width}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Material: {productoDetallado.composition}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Rigidez: {productoDetallado.flex}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Tipo de grip: {productoDetallado.grip_type}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Nivel de poder: {productoDetallado.power_lv}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Distribucion de cuerdas: {productoDetallado.string_pa}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Tipo de Swingt: {productoDetallado.swing_sp}</p>
                                <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Swing weight: {productoDetallado.swing_we}</p>
                            </div>
                            <div className="flex items-center border-b border-gray-200 pb-6">
                            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">({productoDetallado.stock} u. en stock)</p>
                            </div>
                            <div className="flex items-center border-b border-gray-200 pb-6">
                                {
                                mostrarRutaCarrito ?
                                    (<ItemCount key={productoDetallado.id} initial = { initial(productoDetallado.id) } stock={productoDetallado.stock} onAdd = {onAdd}/>) 
                                    :
                                    (<div>
                                        <span className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300 mx-5">{contadorPadre} producto/s agregado/s</span>
                                        <Link to={`/Cart`}><button className="btn btn-outline bg-green-300 m-3">Ir al carrito</button></Link>
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