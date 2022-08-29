import { useEffect, useState } from "react"
import ItemList from './ItemList'


const ItemListContainer = ( {greeting, TotalObjects} ) => {

    const [raquetas, setRaquetas] = useState([])

    useEffect(
        () => {
        fetch('/listadoProductos.json').then(resp =>resp.json()).then(data => setRaquetas( data ))
        }, 
        []
    )


    return (
        <section className='ItemListContainer'>
            <h2 className='text-5xl m-5 text-primary-content'>Bienvenid@ {greeting} a nuestra tienda!! Estos son los nuevos ingresos:</h2>
            <div>
                <ItemList productos={raquetas}/>
            </div>
        </section>
    )
}

export default ItemListContainer