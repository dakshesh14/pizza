import axios from 'axios';

// importing swal from popup animation
import Swal from 'sweetalert2'

import {
    ADD_ITEM_TO_CART_START,
    ADD_ITEM_TO_CART_SUCCESS,
    ADD_ITEM_TO_CART_FAIL,
    DELETE_ITEM_FROM_CART,
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
        })
    }
}

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