import axios from 'axios';

// importing swal from popup animation
import Swal from 'sweetalert2'

import {
    ADD_ITEM_TO_CART_START,
    ADD_ITEM_TO_CART_SUCCESS,
    ADD_ITEM_TO_CART_FAIL,
    CHECK_OLD_ITEMS,
    DELETE_ITEM_FROM_CART,
    INCREMENT_ITEM,
    DECREMENT_ITEM,
} from './actionType';


export const addItemToCart = (itemId) => {
    return (dispatch) => {
        dispatch(addItemToCartStart);
        axios({
            method: "GET",
            url: `../api/pizza/${itemId}`
        }).then(res => {
            let newItem = res.data;
            Swal.fire("Item added to cart", newItem.name + ' has been added to your cart', 'success');
            dispatch(addItemToCartSuccess(newItem));
        }).catch(err => {
            const { detail } = err.response.data;
            Swal.fire("Error", detail, 'error');
            dispatch(addItemToCartFail(detail));
        })
    }
}


export const checkOldItems = () => ({
    type: CHECK_OLD_ITEMS,
})


export const addItemToCartFail = (payload) => ({
    type: ADD_ITEM_TO_CART_FAIL,
    payload,
})


export const deleteItemFromCart = (payload) => ({
    type: DELETE_ITEM_FROM_CART,
    payload
})


export const addItemToCartStart = () => ({
    type: ADD_ITEM_TO_CART_START,
})


export const addItemToCartSuccess = (payload) => ({
    type: ADD_ITEM_TO_CART_SUCCESS,
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
