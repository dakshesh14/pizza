import axios from 'axios';

import {
    ADD_ITEM_TO_CART_START,
    ADD_ITEM_TO_CART_SUCCESS,
    ADD_ITEM_TO_CART_FAIL,
} from './actionType';

export const addItemToCart = (itemId) => {
    return (dispatch) => {
        dispatch(addItemToCartStart);
        console.log(itemId);
        // here goes axios request
        let newItem = {
            name: "Pizzzza",
            price: 5,
        }
        dispatch(addItemToCartSuccess(newItem));
    }
}

export const addItemToCartStart = () => ({
    type: ADD_ITEM_TO_CART_START,
})

export const addItemToCartSuccess = (payload) => ({
    type: ADD_ITEM_TO_CART_SUCCESS,
    payload
})