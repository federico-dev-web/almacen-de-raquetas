import { Link } from "react-router-dom"
import { CartContext } from '../context/CartContext';
import { useContext, useState, useEffect} from 'react'
import ItemCart from './ItemCart'


const Cart = () => {

    //Cantidad de productos adheridos al carrito
    const [cartCount, setCartCount] = useState(0)

    //Total monto de la compra
    const [totalMonto, setTotalMonto] = useState(0)

    const { cart, clear } = useContext(CartContext)

    useEffect(
        () => {
            setCartCount( cart.reduce((acc, item)=>acc+item.quantity,0) )
            setTotalMonto( cart.reduce((acc, item)=>acc+item.quantity*item.price,0) )
        }
        , [cart]
    )

    
    return (
        <div>
            { cartCount ? 
                (<div className="container mx-auto mt-10">
                    <div className="flex shadow-md my-10">
                        <div className="w-3/4 bg-white px-10 py-10">
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="font-semibold text-2xl">Carrito de compras</h1>
                                <h2 className="font-semibold text-2xl">Productos: {cartCount}</h2>
                            </div>
                            <div className="flex mt-10 mb-5">
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Productos</h3>
                                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">cantidad</h3>
                                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Precio</h3>
                                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                            </div>
                            <ul>

                                { cart.map( e => <ItemCart key={e.id} {...e}/>) }

                            </ul>
                            <div className="flex justify-between">
                                <Link to={`/`} className="flex font-semibold text-indigo-600 text-sm mt-10">
                                    <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                        <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/>
                                    </svg>
                                    Seguir comprando
                                </Link>
                                <button onClick={clear} className="btn btn-outline bg-yellow-100 m-3">Vaciar carrito</button>
                            </div>
                        </div>
                        <div id="summary" className="w-1/4 px-8 py-10">
                            <h2 className="font-semibold text-2xl border-b pb-8 text-primary-content">Resumen pedido</h2>
                            <div>
                                <div className="flex font-semibold justify-between py-6 text-sm uppercase text-primary-content">
                                    <span>Total</span>
                                    <span>$ {totalMonto}</span>
                                </div>
                                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">FINALIZAR COMPRA</button>  
                            </div>
                        </div>
                    </div>
                </div>)
                :
                (<div>
                    <h1 className='text-5xl m-5 text-primary-content'>No hay productos agregados al carrito</h1>
                    <Link to={`/`}><button className="btn btn-outline bg-green-300 m-3">Seguir comprando</button></Link>
                </div>
                )
            }
        </div>
    )
}


export default Cart
