import React, { memo } from 'react';

// importing store related stuff
import { connect } from 'react-redux';
import { addItemToCart, deleteItemFromCart } from '../store/cart/action';


function ListPizza({ items, cartItem, addItemToCart, deleteItemFromCart }) {

    return (
        <div className="d-flex flex-wrap justify-content-evenly">
            {items.pizzas.map(pizza => (
                <div className="card col-3 m-3 border-0 shadow rounded" key={pizza.id}>
                    <div className="card-img-container">
                        <div className="pizza-type veg"></div>
                        <img src={pizza.image} className="card-img-top" alt="pizza" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{pizza.name}</h5>
                        <h6 className="text-muted mb-3">
                            ${pizza.price}
                        </h6>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="pizza-size">Pizza Size:</label>
                                <select className="form-select form-select-sm" aria-label="Pizza Size"
                                    id="pizza-size">
                                    <option value="small">Small</option>
                                    <option defaultValue="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cheese-option">Cheese Option:</label>
                                <select className="form-select form-select-sm" aria-label="Cheese Option"
                                    id="cheese-option">
                                    <option value="little">Little extra</option>
                                    <option defaultValue="more">More extra</option>
                                    <option value="american">American</option>
                                </select>
                            </div>
                            <button type="button" className="btn btn-outline-primary d-flex ms-auto" onClick={() => {
                                addItemToCart(pizza.id)
                            }}>Add To Cart</button>
                        </form>
                    </div>
                </div>
            ))}
        </div>
    )
}



const mapStateToProps = (state) => ({
    cartItem: state,
})

const mapDispatchToProps = {
    addItemToCart: (itemId) => addItemToCart(itemId),
    deleteItemFromCart: (itemId) => deleteItemFromCart(itemId),
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(memo(ListPizza))