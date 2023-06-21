import * as actions from '../actionTypes';

export const categoryReducer = (state = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case actions.CATEGORY_ADDED:
            return [
                ...state,
                {
                    ...payload
                }
            ]

        case actions.CATEGORY_REMOVED:
            return state.filter(category => category.id !== payload.id)

        default:
            return state
    }
}