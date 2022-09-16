import {Link} from "react-router-dom"

const Item = ({price, model, brand, weight, head_size, swing_we, image, stock, id}) => {
    return (
        <li>
            <div className="card card-side bg-base-100 shadow-xl m-5">
                <figure><Link to={`/detail/${id}`}><img className='imagenProducto'  src={image} alt="Movie"/></Link></figure>
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

export default Item