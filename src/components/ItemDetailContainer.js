import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemDetail from './ItemDetail';
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const idRuta = useParams()
    const [producto, setProducto] = useState([])

    const getProducto = (id) => {
        const db = getFirestore()
        const docRef = doc(db, "raquets", id);
        getDoc( docRef ).then( snapshot => {
            setProducto(  {id: snapshot.id, ...snapshot.data()}  )
        })
    }

    useEffect( 
        () => {
            getProducto(idRuta.id)
        }
    ,[idRuta])


    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer