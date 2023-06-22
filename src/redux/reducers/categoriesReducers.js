import { SET_ACTIVE_CATEGORY } from "../actions/cartActions";

function CategoriesReducers(state, action) {
    const { type, payload } = action;
    if (type === SET_ACTIVE_CATEGORY) {
        state.activeCategory = payload.categoryName;
    }

    return state
}

export default CategoriesReducers