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
    error: null,
    items: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case CHECK_OLD_ITEMS:
            let oldItem = localStorage.getItem('cart');
            oldItem = JSON.parse(oldItem);
            if (!oldItem) return state

            return {
                ...state,
                totalItem: oldItem.length,
                items: oldItem,
            }

        case ADD_ITEM_TO_CART_START:
            return {
                ...state,
                loading: true,
            }

        case ADD_ITEM_TO_CART_SUCCESS:
            if (!state.items.some(item => item.id === action.payload.id)) {
                // saving items in localStorage
                const dataString = JSON.stringify([...state.items, action.payload]);
                localStorage.setItem('cart', dataString);

                return {
                    ...state,
                    error: null,
                    loading: false,
                    totalItem: state.items.length + 1,
                    items: [...state.items, action.payload],
                }
            }

        case ADD_ITEM_TO_CART_FAIL:
            return {
                ...state,
                error: action.payload,
            }

        case DELETE_ITEM_FROM_CART:

            // first filter and find item, than delete it and set new localStorage
            let itemCopy = state.items.slice();
            itemCopy.splice(itemCopy.findIndex(item => item.id === action.payload), 1);
            localStorage.setItem('cart', JSON.stringify(itemCopy));

            return {
                ...state,
                items: itemCopy,
                totalItem: itemCopy.length,
            }

        case INCREMENT_ITEM:
            let incCopy = [...state.items]
            let index = incCopy.findIndex(item => item.id === action.payload);
            incCopy[index] = {...incCopy[index], quantity: incCopy[index].quantity += 1 };
            localStorage.setItem('cart', JSON.stringify(incCopy));

            return {
                ...state,
                items: incCopy,
            }

        case DECREMENT_ITEM:
            let decCopy = [...state.items]
            let decIndex = decCopy.findIndex(item => item.id === action.payload);
            decCopy[index] = {...decCopy[decIndex], quantity: decCopy[decIndex].quantity -= 1 };
            localStorage.setItem('cart', JSON.stringify(decCopy));

            return {
                ...state,
                items: decCopy,
            }

        default:
            return state
    }
}

export default reducer