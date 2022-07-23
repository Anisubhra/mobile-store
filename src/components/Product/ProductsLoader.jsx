import React from 'react'

const ProductsLoader = () => {
    const ITEMS = 8;

    const CardComponent = () => {
        return (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden animate-pulse">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="./420x260_cleanup.png" />
                </a>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 bg-gray-100 p-2 w-20 animate-pulse"></h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium bg-gray-100 p-3 w-60 animate-pulse"></h2>
                    <span className="flex items-center my-1 bg-gray-100 p-2 w-40 animate-pulse">
                    </span>
                    <div className="flex">
                        <p className="mt-1 bg-gray-100 p-2 w-16 animate-pulse"></p>
                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-1 focus:outline-none hover:bg-indigo-600 rounded-full bg-gradient-to-r from-rose-500 to-violet-500 h-8 w-8 animate-pulse">
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-wrap -m-4 bg-white rounded">
            {
                [...Array(ITEMS)].map((e, i) => (
                    <CardComponent key={i} />
                ))
            }
        </div>
    )
}

export default ProductsLoader