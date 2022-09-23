import { useEffect, useState } from "react"
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
/* import listadoProductos from '../listadoProductos.json' */


/* const sendOrder = (item) => { 
    const order = {...item}
    const db = getFirestore()
    const orderCollection = collection(db, "raquets")

    addDoc( orderCollection, order ).then( ({id})=> console.log(id) )

} */

/* listadoProductos.forEach(item => sendOrder(item)) */

export const ProductCard = ( {categoryId, price, description, image} ) => {
    return (
        <div>
            <li className="text-primary-content">{categoryId}</li>
            <li className="text-primary-content">{price}</li>
            <li className="text-primary-content">{description}</li>
            <img className="w-10" src={image} alt={description}/>
        </div>
    )
}

const ProbandoFirebase = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
    getProducts()
    }, [])



    const getProducts = () => {
        const db = getFirestore()
        const itemCollection = collection( db, 'productos' )
        getDocs( itemCollection ).then( snapshot => {
            setProducts( snapshot.docs.map( d => ({id: d.id, ...d.data()}) ) );
        })
    }

    return (
    <div>
        <button className="btn" onClick={()=>console.log(products)}>asdasd</button>
        { products.map( p => <ProductCard key={p.id} {...p}/> ) }
    </div>
    )
}
export default ProbandoFirebase