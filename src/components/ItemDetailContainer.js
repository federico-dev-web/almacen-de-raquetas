import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const idRuta = useParams()
    const [producto, setProducto] = useState([])

    useEffect( 
        () => {
        fetch('/listadoProductos.json')
            .then(resp =>resp.json())
            .then(data => 
                setProducto( data.filter( (prod) => parseInt(prod.id) === parseInt(idRuta.id) ) )
            )
        }
    )


    return (
        <div>
            <ItemDetail {...producto[0]}/>
        </div>
    )
}

export default ItemDetailContainer