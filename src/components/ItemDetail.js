import ItemCount from "./ItemCount"



const ItemDetail = ({id, stock, brand, image, model, price, head_size, length, weight, tension, balance, beam_width, composition, flex, grip_type, power_lv, swing_sp, swing_we, string_pa}) => {
    

    return (


        // estilo sacado de https://app.tailwinduikit.com/components

        <div className="my-20 md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 bg-white">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img className="w-full" alt="imagen raqueta" src={image} />
            </div> 
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm leading-none text-gray-600 dark:text-gray-300 "> {brand} 2022</p>
                    <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2"> {brand} {model} </h1>
                </div>
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">Precio: {price}</p>
                    <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">Tamaño cabeza: {head_size}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Largo: {length}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Peso: {weight}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Tension: {tension}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Balance: {balance}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Grosor del marco: {beam_width}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Material: {composition}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Rigidez: {flex}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Tipo de grip: {grip_type}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Nivel de poder: {power_lv}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Distribucion de cuerdas: {string_pa}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Tipo de Swingt: {swing_sp}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Swing weight: {swing_we}</p>
                </div>
                <div className="flex items-center border-b border-gray-200 pb-6">
                    <ItemCount key={id} stock={stock}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail