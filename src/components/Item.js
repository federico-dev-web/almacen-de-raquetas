
import ItemCount from './ItemCount'

const Item = ({price, model, brand, weight, head_size, swing_we, image, stock, id}) => {
    return (
        <li>
            <div className="card card-side bg-base-100 shadow-xl m-5">
                <figure><a href='/#'><img className='imagenProducto'  src={image} alt="Movie"/></a></figure>
                <div className="card-body">
                    <h2 className="card-title">Raqueta {brand} {model}</h2>
                    <p>Tamaño cabeza: {head_size}</p>
                    <p>Peso: {weight}</p>
                    <p>Swing Weight: {swing_we}</p>
                    <p>precio: {price}</p>
                    <div className="card-actions justify-end">
                        <ItemCount key={id} stock={stock}/>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Item