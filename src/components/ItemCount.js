import { useState } from "react"

const ItemCount = ( {stock} ) => {

    const [contador, setContador] = useState(0)
    const [inventario, setInventario] = useState(stock)
    const [itemsEnCarrito, setitemsEnCarrito] = useState(0)

    const suma = ()=>{
        contador < parseInt(inventario) &&  setContador(contador + 1)
    }

    const resta = ()=>{
        contador > 0 &&  setContador(contador - 1)
    }

    const agregandoAlCarrito = () => {
        setInventario(inventario - contador)
        setitemsEnCarrito(itemsEnCarrito + contador)
        setContador(0)
    }

    const agregarAlCarrito = ()=>{
        contador === 0 || agregandoAlCarrito()
        }
        /* a completar proximamente... */
    

    return (
        <div>
            <div className='contador my-3'>
                <button onClick={suma} className="btn btn-outline btn-success">+</button>
                <p stock = {inventario} >{contador}</p>
                <button onClick={resta} className="btn btn-outline btn-error">-</button>
            </div>
            <button onClick={agregarAlCarrito} className="btn btn-outline">Agregar al carrito</button>
        </div>
        
    )
}

export default ItemCount