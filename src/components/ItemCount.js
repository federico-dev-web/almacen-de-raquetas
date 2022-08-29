import React from 'react'

const ItemCount = () => {
    return (
        <div>
            <div className='contador my-3'>
                <button className="btn btn-outline btn-success">+</button>
                <p>0</p>
                <button className="btn btn-outline btn-error">-</button>
            </div>
            <button className="btn btn-outline">Agregar al carrito</button>
        </div>
        
    )
}

export default ItemCount