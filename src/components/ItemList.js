
import Item from './Item'

const ItemList = ( {productos} ) => {
    return (<ul>
            {productos.map( e => <Item key={e.id} {...e}/>)}
        </ul>
    )
}
export default ItemList