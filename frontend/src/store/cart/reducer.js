import {
    ADD_ITEM_TO_CART_START,
    ADD_ITEM_TO_CART_SUCCESS,
    ADD_ITEM_TO_CART_FAIL,
    DELETE_ITEM_FROM_CART,
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
            // [...new Set(array.map(item => item.age))];
            // return [...new Set([...items, ...res.data.results])]
            if(action.payload in state.items) {
                console.log("reeeeeeeeee");
            }
            return {
                ...state,
                error: null,
                loading: false,
                totalItem: state.items.length + 1,
                items: [...new Set([
                    ...state.items,
                    action.payload
                ])],
                // items: [
                //     ...state.items,
                //     action.payload
                // ],
            }
        case ADD_ITEM_TO_CART_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        case DELETE_ITEM_FROM_CART:
            const itemCopy = state.items.slice();
            itemCopy.splice(action.payload, 1);
            return {
                ...state,
                items: itemCopy,
            }
        default:
            return state
    }
}

export default reducer