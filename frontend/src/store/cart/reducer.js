import {
    ADD_ITEM_TO_CART_START,
    ADD_ITEM_TO_CART_SUCCESS,
    ADD_ITEM_TO_CART_FAIL,
    DELETE_ITEM_FROM_CART,
    CHECK_OLD_ITEMS,
    INCREMENT_ITEM,
    DECREMENT_ITEM,
} from './actionType';

const initialState = {
    loading: false,
    totalItem: 0,
    totalPrice: 0,
    error: null,
    items: [],
}

// importing utility functions
import {
    calcTotalPrice,
    addToLocalStorage
} from './utility';

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case CHECK_OLD_ITEMS:
            let oldItem = localStorage.getItem('cart');
            oldItem = JSON.parse(oldItem);
            if (!oldItem) return state

            return oldItem

        case ADD_ITEM_TO_CART_START:
            return {
                ...state,
                loading: true,
            }

        case ADD_ITEM_TO_CART_SUCCESS:
            {
                if (!state.items.some(item => item.id === action.payload.id)) {
                    const newItemArray = [...state.items, action.payload];
                    const newState = {
                        ...state,
                        error: null,
                        loading: false,
                        totalItem: newItemArray.length,
                        items: newItemArray,
                        totalPrice: calcTotalPrice(newItemArray),
                    }
                    addToLocalStorage(newState);
                    return newState
                }
            }

        case ADD_ITEM_TO_CART_FAIL:
            return {
                ...state,
                error: action.payload,
            }

        case DELETE_ITEM_FROM_CART:
            {

                // first filter and find item, than delete it and set new localStorage
                let itemCopy = [...state.items]
                itemCopy.splice(itemCopy.findIndex(item => item.id === action.payload), 1);

                const newState = {
                    ...state,
                    items: itemCopy,
                    totalItem: itemCopy.length,
                    totalPrice: calcTotalPrice(itemCopy),
                }
                addToLocalStorage(newState);

                return newState
            }

        case INCREMENT_ITEM:
            {
                let itemCopy = [...state.items]
                let index = itemCopy.findIndex(item => item.id === action.payload);
                itemCopy[index] = {...itemCopy[index], quantity: itemCopy[index].quantity += 1 };
                const newState = {
                    ...state,
                    items: itemCopy,
                    totalPrice: calcTotalPrice(itemCopy),
                }
                addToLocalStorage(newState);

                return newState
            }

        case DECREMENT_ITEM:
            {
                let itemCopy = [...state.items]
                let index = itemCopy.findIndex(item => item.id === action.payload);
                itemCopy[index] = {...itemCopy[index], quantity: itemCopy[index].quantity -= 1 };

                const newState = {
                    ...state,
                    items: itemCopy,
                    totalPrice: calcTotalPrice(itemCopy),
                }
                addToLocalStorage(newState);

                return newState
            }

        default:
            return state
    }
}

export default reducer