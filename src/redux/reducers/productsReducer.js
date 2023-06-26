import React from 'react'
import products from '../../data/products.json'
const initialState = {
    products: {
        items: products,
    },
}

function ProductsReducer(state = initialState, action) {
    return state
}

export default ProductsReducer