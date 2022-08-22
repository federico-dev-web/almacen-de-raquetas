import React from 'react'

const ItemListContainer = ( {greeting} ) => {
    return (
        <section className='ItemListContainer'>
            <h2>Bienvenid@ {greeting} a nuestra tienda!! Estos son los nuevos ingresos:</h2>
            <ul>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
            </ul>
        </section>
    )
}

export default ItemListContainer