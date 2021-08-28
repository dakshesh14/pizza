import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';

// importing cart related stuff
import { deleteItemFromCart, increaseItem, decreaseItem } from '../store/cart/action';
import { connect } from 'react-redux';


function UserCart({ cartItems, deleteItemFromCart, increaseItem, decreaseItem }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if (cartItems.items.length === 0) {
        return (
            <div className="container">
                <div className="row pt-5">
                    <div className="col-12">
                        <h2>Seems like you don't have any item in cart.</h2>
                        <Link className="fancy-link" to="/menu">Continue Shopping</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">

                        {cartItems.items.map(item => (
                            <div className="row align-items-center mb-5" key={item.id}>
                                <div className="col-md-3">
                                    <img src={item.image} className="img-fluid" alt={item.name} />
                                </div>
                                <div className="col-md-6">
                                    <div className="pizza-cart-detail">
                                        <h3>
                                            {item.name}
                                        </h3>
                                        <p className="mb-0 text-muted">Medium</p>
                                        <p className="mb-0 text-muted">Extra Cheese</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="pizza-cart-quantity d-flex">
                                        {
                                            item.quantity === 1
                                                ?
                                                <button className="btn btn-outline-dark" onClick={() => {
                                                    deleteItemFromCart(item.id);
                                                }}>
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                                :
                                                <button className="btn btn-outline-dark" onClick={() => {
                                                    decreaseItem(item.id);
                                                }}>
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                        }

                                        <div className="bg-light d-flex align-items-center">
                                            <p className="m-0 p-0 px-3">{item.quantity}</p>
                                        </div>
                                        <button className="btn btn-outline-dark" onClick={() => {
                                            increaseItem(item.id);
                                        }}>
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="col-md-4 mt-5 mt-md-0 px-2 py-2">
                        <div className="w-100 bg-white shadow px-3 py-5 px-md-5">
                            <h5 className="d-flex justify-content-between mb-3">
                                <span>Sub. Total:</span>
                                <span>${cartItems.totalPrice}</span>
                            </h5>
                            <button className="button button-secondary w-100 mt-5">
                                Pay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


const mapStateToProps = (state) => ({
    cartItems: state,
})

const mapDispatchToProps = {
    deleteItemFromCart: (itemId) => deleteItemFromCart(itemId),
    increaseItem: (itemId) => increaseItem(itemId),
    decreaseItem: (itemId) => decreaseItem(itemId),
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(memo(UserCart))