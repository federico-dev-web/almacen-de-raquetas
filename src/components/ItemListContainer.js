import { useEffect, useState } from "react"
import ItemList from './ItemList'
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


const ItemListContainer = ( {greeting} ) => {

    const [raquetas, setRaquetas] = useState([])
    const idCategoria = useParams()
    //////////////

    const getRaquetas = () => {
        const db = getFirestore()
        const itemCollection = collection( db, 'raquets' )
        getDocs( itemCollection ).then( snapshot => {
            setRaquetas( snapshot.docs.map( d => ({id: d.id, ...d.data()}) ) );
        })
    }

    const getRaquetasByCategory = () => {
        const db = getFirestore()
        const itemCollection = collection( db, 'raquets' )
        const q = query(itemCollection, where('brand', '==', idCategoria.categoryId) )
        getDocs( q ).then( snapshot => {
            setRaquetas( snapshot.docs.map( d => ({id: d.id, ...d.data()}) ) );
        })
    }


    //////////////

    useEffect( 
        () => {
            ['Head','Babolat','Wilson','Yonex'].includes(idCategoria.categoryId,0) ? 
            (
                getRaquetasByCategory()
            ) : (
                getRaquetas()
            )
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