import { useEffect, useState } from "react"
import ItemList from './ItemList'
import listadoProductos from '../listadoProductos.json'
import { useParams } from "react-router-dom"


const ItemListContainer = ( {greeting} ) => {

    const [raquetas, setRaquetas] = useState([])
    const idCategoria = useParams()
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
                .then( resp => {
                    ['Head','Babolat','Wilson','Yonex'].includes(idCategoria.categoryId,0) ? 
                    (
                        setRaquetas( resp.filter(prod => prod.brand === idCategoria.categoryId) )
                    ) : (
                        setRaquetas(resp)
                    )
                } )
                .catch(err => console.log(err));
        }
    ,[idCategoria])



    return (
        <section className='ItemListContainer'>
            { ['Head','Babolat','Wilson','Yonex'].includes(idCategoria.categoryId,0) ?
            (<h2 className='text-5xl m-5 text-primary-content'>Raquetas {idCategoria.categoryId} disponibles:</h2>)
            :
            (<h2 className='text-5xl m-5 text-primary-content'>Bienvenid@ {greeting} a nuestra tienda!! Estos son los modelos disponibles:</h2>)
            }
            <div>
                <ItemList productos={raquetas}/>
            </div>
        </section>
    )
}

export default ItemListContainer