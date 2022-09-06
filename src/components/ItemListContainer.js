import { useEffect, useState } from "react"
import ItemList from './ItemList'
import listadoProductos from '../listadoProductos.json'


const ItemListContainer = ( {greeting} ) => {

    const [raquetas, setRaquetas] = useState([])

    //////////////
    
    const getRaquetas = (data, time) =>
        new Promise((resolve, reject) => {
                setTimeout( () => {
                    data ? resolve(data) : reject("Error")
                    }
                , time)
            }
        )

    //////////////
    useEffect( 

        () => {
            getRaquetas(listadoProductos, 2000)
                .then( resp => {setRaquetas( resp ) } )
                .catch(err => console.log(err))
        }
        
    /*  () => {
        fetch('/listadoProductos.json').then(resp =>resp.json()).then(data => setRaquetas( data ))
        }, 
        []} 
        
    */
    )


    return (
        <section className='ItemListContainer'>
            <h2 className='text-5xl m-5 text-primary-content'>Bienvenid@ {greeting} a nuestra tienda!! Estos son los modelos disponibles:</h2>
            <div>
                <ItemList productos={raquetas}/>
            </div>
        </section>
    )
}

export default ItemListContainer