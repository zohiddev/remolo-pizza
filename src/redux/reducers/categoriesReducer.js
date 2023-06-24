import React from 'react'
import { ACTIVE__CART } from './actions/cartActions'

function CategoriesReducer(state, action) {
    const { type, payload } = action
    console.log(type)
    if (type === ACTIVE__CART) {
        state.activeCategory = payload.categoryName
    }

    return state
}

export default CategoriesReducer