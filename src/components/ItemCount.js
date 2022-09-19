import { useState } from "react"


const ItemCount = ( {stock, initial, onAdd} ) => {

    //Elemento que se renderiza en el contador
    const [count, setCount] = useState(initial)

    //Cantidad de items agregados de este producto
    const [itemsEnCarrito, setitemsEnCarrito] = useState(0)

    const suma = ()=>{
        count < parseInt(stock) &&  setCount(count + 1)
    }

    const resta = ()=>{
        count > 0 &&  setCount(count - 1)
    }

    const agregandoAlCarrito = () => {
        setitemsEnCarrito(itemsEnCarrito + count)
        setCount(0)
        onAdd(count)
    }

    const agregarAlCarrito = ()=>{
        agregandoAlCarrito()
    }


    return (
        <div>
            <div className='contador my-3'>
                <button onClick={resta} className="btn btn-outline btn-error">-</button>
                <p>{count}</p>
                <button onClick={suma} className="btn btn-outline btn-success">+</button>
            </div>
            <button onClick={agregarAlCarrito} className="btn btn-outline">Agregar al carrito</button>
        </div>
        
    )
}

export default ItemCount