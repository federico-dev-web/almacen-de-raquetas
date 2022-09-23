import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore";


export const ProductCard = ({price, model, brand, weight, head_size, swing_we, image, stock, id}) => {
    return (
        <li>
            <div className="card card-side bg-base-100 shadow-xl m-5">
                <figure><div to={`/detail/${id}`}><img className='imagenProducto'  src={image} alt="Movie"/></div></figure>
                <div className="card-body">
                    <h2 className="card-title">Raqueta {brand} {model}</h2>
                    <p>Tamaño cabeza: {head_size}</p>
                    <p>Peso: {weight}</p>
                    <p>Swing Weight: {swing_we}</p>
                    <p>precio: {price}</p>
                    <p>({stock} u. en stock)</p>
                </div>
            </div>
        </li>
    )
}

const ProbandoFirebase2 = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
    getProducts()
    }, [])



    const getProducts = () => {
        const db = getFirestore()
        const itemCollection = collection( db, 'raquets' )
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
export default ProbandoFirebase2