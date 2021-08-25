import {
    ADD_ITEM_TO_CART_START,
    ADD_ITEM_TO_CART_SUCCESS,
    ADD_ITEM_TO_CART_FAIL,
} from './actionType';

const initialState = {
    loading: false,
    totalItem: 0,
    error: null,
    items: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART_START:
            return {
                ...state,
                loading: true,
            }

        case ADD_ITEM_TO_CART_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                items: action.payload,
                totalItem: action.payload.count,
            }

        case ADD_ITEM_TO_CART_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        default: return state
    }
}

export default reducer