import { useState } from "react"


const ItemCount = ( {stock, initial, onAdd} ) => {

    const [cantidadAgregada, setCantidadAgregada] = useState(initial)
    const [inventario, setInventario] = useState(stock)
    const [itemsEnCarrito, setitemsEnCarrito] = useState(0)

    const suma = ()=>{
        cantidadAgregada < parseInt(inventario) &&  setCantidadAgregada(cantidadAgregada + 1)
    }

    const resta = ()=>{
        cantidadAgregada > initial &&  setCantidadAgregada(cantidadAgregada - 1)
    }

    const agregandoAlCarrito = () => {
        setInventario(inventario - cantidadAgregada)
        setitemsEnCarrito(itemsEnCarrito + cantidadAgregada)
        setCantidadAgregada(0)
        onAdd(cantidadAgregada)
    }

    const agregarAlCarrito = ()=>{
        cantidadAgregada === 0 || agregandoAlCarrito()
        }
        /* a completar proximamente... */
    

    return (
        <div>
            <div className='contador my-3'>
                <button onClick={resta} className="btn btn-outline btn-error">-</button>
                <p stock = {inventario} >{cantidadAgregada}</p>
                <button onClick={suma} className="btn btn-outline btn-success">+</button>
            </div>
            <button onClick={agregarAlCarrito} className="btn btn-outline">Agregar al carrito</button>
        </div>
        
    )
}

export default ItemCount