
import Item from './Item'

const ItemList = ( {productos} ) => {
    return (<ul>
        {productos.length ? 
            (productos.map( e => <Item key={e.id} {...e}/>)) : 
            (<h1 className='text-5xl m-5 text-primary-content'>Cargando...</h1>)}
        </ul>
    )
}
export default ItemList