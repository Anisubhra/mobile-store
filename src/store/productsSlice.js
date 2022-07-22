import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { objectToArray } from "../utils/objectToArray";


export const getProductsAsync = createAsyncThunk('products/getProductsAsync', async () => {
    const BASE_URL = process.env.REACT_APP_API_URL;
    const url = `${BASE_URL}open-to-cors/assignment.json`;
    const resp = await fetch(url);

    if (resp.ok) {
        let products = await resp.json();
        products = { ...products, products: objectToArray(products.products) }

        return { products };
    }
})

export const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {},
    extraReducers: {
        [getProductsAsync.fulfilled]: (state, action) => {
            return action.payload.products
        }
    }
})

export default productsSlice.reducer;