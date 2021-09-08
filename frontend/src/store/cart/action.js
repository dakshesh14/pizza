import {
    ADD_ITEM_TO_CART_SUCCESS,
    DELETE_ITEM_FROM_CART,
    INCREMENT_ITEM,
    DECREMENT_ITEM,
} from './actionType';


export const addItemToCart = (payload) => ({
    type: ADD_ITEM_TO_CART_SUCCESS,
    payload
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