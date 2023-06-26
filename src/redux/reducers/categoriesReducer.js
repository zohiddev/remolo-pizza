import React from 'react'
import { ACTIVE__CART } from './actions/cartActions'
import { categoriesData } from '../../data/categories'

const initialState = {
    categories: {
        activeCategory: 'Pizza',
        items: categoriesData,
    },
}

function CategoriesReducer(state = initialState, action) {
    const { type, payload } = action
    console.log(type)
    if (type === ACTIVE__CART) {
        state.activeCategory = payload.categoryName
    }

    return state
}

export default CategoriesReducer