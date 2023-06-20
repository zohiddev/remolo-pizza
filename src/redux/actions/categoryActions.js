import * as actions from '../actionTypes';

export const categoryAdded = (category) => {
    return {
        type: actions.CATEGORY_ADDED,
        payload: {
            ...category
        }
    }
}

export const categoryRemoved = (id) => {
    return {
        type: actions.CATEGORY_REMOVED,
        payload: {
            id
        }
    }
}