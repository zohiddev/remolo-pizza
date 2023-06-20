import * as actions from '../actionTypes';

export const categoryReducer = (state = [], action) => {
    switch (action.type) {
        case actions.CATEGORY_ADDED:
            return [
                ...state,
                {
                    ...action.payload
                }
            ]

        case actions.CATEGORY_REMOVED:
            return state.filter(category => category.id !== action.payload.id)

        default:
            return state
    }
}