import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {Link} from "react-router-dom"

const ItemCart = ( element ) => {

    const { removeItem } = useContext(CartContext)

    return (
        <li key={element.id}>
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5"> 
                    <div className="w-20">
                        <Link to={`/detail/${element.id}`}>
                            <img className="h-24" src= {element.image} alt=""/>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{element.brand} {element.model}</span>
                        <button onClick={()=>{removeItem(element.id)}} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Quitar</button>
                    </div>
                </div>
            <div className="flex justify-center w-1/5">
                <span className="text-center w-1/5 font-semibold text-sm">{element.quantity}</span>
            </div>
                <span className="text-center w-1/5 font-semibold text-sm">$ {element.price}</span>
                <span className="text-center w-1/5 font-semibold text-sm">$ {parseFloat(element.price)*parseFloat(element.quantity)}</span>
            </div>
        </li>
    )
}

export default ItemCart