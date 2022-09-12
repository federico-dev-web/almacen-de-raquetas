import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemDetail from './ItemDetail';
import listadoProductos from '../listadoProductos.json'

const ItemDetailContainer = () => {

    const idRuta = useParams()
    const [producto, setProducto] = useState([])

    const getProducto = (data, time) =>
    new Promise((resolve, reject) => {
            setTimeout( () => {
                data ? resolve(data) : reject("Error")
                }
            , time)
        }
    )

    useEffect( 
        

        () => {
            getProducto(listadoProductos, 2000)
                .then( resp => 
                    {setProducto( resp.find((prod) => parseInt(prod.id) === parseInt(idRuta.id)))}
                    )
                .catch(err => console.log(err))
        }

/*         () => {
        fetch('/listadoProductos.json')
            .then(resp =>resp.json())
            .then(data => 
                setProducto( data.filter( (prod) => parseInt(prod.id) === parseInt(idRuta.id) ) )
            )
        } 
*/
    ,[idRuta])


    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer