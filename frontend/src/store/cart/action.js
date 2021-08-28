import {
    ADD_ITEM_TO_CART_SUCCESS,
    CHECK_OLD_ITEMS,
    DELETE_ITEM_FROM_CART,
    INCREMENT_ITEM,
    DECREMENT_ITEM,
} from './actionType';


export const addItemToCart = (payload) => ({
    type: ADD_ITEM_TO_CART_SUCCESS,
    payload
})


export const checkOldItems = () => ({
    type: CHECK_OLD_ITEMS,
})


export const deleteItemFromCart = (payload) => ({
    type: DELETE_ITEM_FROM_CART,
    payload
})


export const increaseItem = (payload) => ({
    type: INCREMENT_ITEM,
    payload
})


export const decreaseItem = (payload) => ({
    type: DECREMENT_ITEM,
    payload
})