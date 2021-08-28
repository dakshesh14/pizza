import React, { memo } from 'react';

// importing store related stuff
import { connect } from 'react-redux';
import { addItemToCart, deleteItemFromCart } from '../store/cart/action';


function ListPizza({ items, addItemToCart }) {

    const handleSubmit = (e, item) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        let total = 0;
        formData.forEach(x => {
            total += parseInt(x);
        })
        addItemToCart({ item, total });
    }

    if (items.pizzas.length === 0) {
        return (
            <div className="h-100 d-flex justify-content-center align-items-center">
                <img src="../../static/images/404.svg" alt="404" />
            </div>
        )
    }

    return (
        <div className="d-flex flex-wrap justify-content-evenly">
            {items.pizzas.map(pizza => (
                <div className="card col-md-3 col-sm-12 m-3 border-0 shadow rounded" key={pizza.id}>
                    <div className="card-img-container">
                        <div className="pizza-type veg"></div>
                        <img src={pizza.image} className="card-img-top" alt="pizza" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{pizza.name}</h5>
                        <h6 className="text-muted mb-3">
                            ${pizza.price}
                        </h6>
                        <form onSubmit={e => {
                            handleSubmit(e, pizza)
                        }}>
                            <input type="hidden" name="price" value={pizza.price} />
                            {
                                pizza.addons.map(addon => (
                                    <div className="mb-3" key={addon.id}>
                                        <label htmlFor="pizza-size">{addon.v_name}:</label>
                                        <select className="form-select form-select-sm" name={addon.v_name} id={addon.v_name}>
                                            {
                                                addon.options.map(option => (
                                                    <option key={option.id} value={option.price}>{option.value}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                ))
                            }
                            <button type="submit" className="btn btn-outline-primary d-flex ms-auto">Add To Cart</button>
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
    addItemToCart: (itemId, total) => addItemToCart(itemId, total),
    deleteItemFromCart: (itemId) => deleteItemFromCart(itemId),
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(memo(ListPizza))