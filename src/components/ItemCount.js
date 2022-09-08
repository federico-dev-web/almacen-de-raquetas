import { useState } from "react"

const ItemCount = ( {stock, initial} ) => {

    const [onAdd, setOnAdd] = useState(initial)
    const [inventario, setInventario] = useState(stock)
    const [itemsEnCarrito, setitemsEnCarrito] = useState(0)

    const suma = ()=>{
        onAdd < parseInt(inventario) &&  setOnAdd(onAdd + 1)
    }

    const resta = ()=>{
        onAdd > initial &&  setOnAdd(onAdd - 1)
    }

    const agregandoAlCarrito = () => {
        setInventario(inventario - onAdd)
        setitemsEnCarrito(itemsEnCarrito + onAdd)
        setOnAdd(0)
    }

    const agregarAlCarrito = ()=>{
        onAdd === 0 || agregandoAlCarrito()
        }
        /* a completar proximamente... */
    

    return (
        <div>
            <div className='contador my-3'>
                <button onClick={resta} className="btn btn-outline btn-error">-</button>
                <p stock = {inventario} >{onAdd}</p>
                <button onClick={suma} className="btn btn-outline btn-success">+</button>
            </div>
            <button onClick={agregarAlCarrito} className="btn btn-outline">Agregar al carrito</button>
        </div>
        
    )
}

export default ItemCount