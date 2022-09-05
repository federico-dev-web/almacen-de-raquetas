import ItemCount from "./ItemCount"



const ItemDetail = () => {
    
    let id = 1
    let stock = 1

    return (


        // estilo sacado de https://app.tailwinduikit.com/components

        <div className="my-20 md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 bg-white">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img className="w-full" alt="imagen raqueta" src="https://img.tennis-warehouse.com/watermark/rs.php?path=BARO-1.jpg&nw=592" />
            </div> 
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">Balenciaga Fall Collection</p>
                    <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">Balenciaga Signature Sweatshirt</h1>
                </div>
                <div className="border-b border-gray-200 pb-6">
                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                    <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">Product Code: 8BN321AF2IF0NYA</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Length: 13.2 inches</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Height: 10 inches</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Depth: 5.1 inches</p>
                    <p className="md:w-96 text-base leading-normal text-gray-600 dark:text-gray-300 mt-4">Composition: 100% calf leather, inside: 100% lamb leather</p>
                </div>
                <div className="flex items-center border-b border-gray-200 pb-6">
                    <ItemCount key={id} stock={stock}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail