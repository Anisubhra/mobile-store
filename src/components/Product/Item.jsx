import React from 'react'
import { formatPrice } from '../../utils/formatPrice'
import Ratings from './Ratings'

const Item = ({ subcategory, title, price, popularity }) => {
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/420x260_cleanup.png" />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{subcategory}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                <Ratings popularity={popularity} />
                <div className="flex">
                    <p className="mt-1 font-normal">{formatPrice(price)}</p>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-1 focus:outline-none hover:bg-indigo-600 rounded-full bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent">
                        Buy now
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-violet-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Item