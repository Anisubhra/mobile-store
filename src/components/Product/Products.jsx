import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getProductsAsync } from '../../store/productsSlice';
import { sortList } from '../../utils/sortList';
import Item from './Item';
import ProductsLoader from './ProductsLoader';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const [productsList, setProductsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState(1);

    const sortProducts = (order = 1) => {
        const sortedProducts = sortList(products.products, "popularity", order);
        // console.log(sortedProducts)
        setProductsList(sortedProducts);
    }

    useEffect(() => {
        dispatch(getProductsAsync());
    }, [dispatch])

    useEffect(() => {
        if (products)
            sortProducts();
    }, [products])

    useEffect(() => {
        if (productsList)
            setTimeout(() => setLoading(false), 5000);
    }, [productsList])

    useEffect(() => {
        setLoading(true);
        setSortOrder(1);
    }, [])

    const sortingToggle = () => {
        const order = sortOrder ? 0 : 1;

        sortProducts(order);
        setSortOrder(order);
    }

    return (
        <section className="text-gray-600 body-font bg-violet-100">
            <div className="container px-5 py-24 mx-auto">
                <h2 className="text-xs text-violet-500 tracking-widest font-medium title-font mb-1 text-center uppercase">Recommended</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-10 bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent">This Week's Highlights
                </h1>
                <button className={`${loading ? "hidden" : "flex"} ml-auto text-gray-500 border-0 focus:outline-none font-medium p-1 mb-6 lowercase`} onClick={sortingToggle}>
                    {
                        sortOrder ?
                            <>
                                Sort by ascending
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                                </svg>
                            </> :
                            <>
                                Sort by descending
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                                </svg>
                            </>
                    }
                </button>
                {
                    loading ?
                        <ProductsLoader /> : (
                            <div className="flex flex-wrap -m-4 bg-white rounded overflow-y-auto products-wrapper scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-indigo-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                {
                                    productsList.map((item) => (
                                        <Item {...item} key={nanoid()} />
                                    ))
                                }
                            </div>
                        )
                }
            </div>
        </section >
    )
}

export default Products