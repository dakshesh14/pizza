import React, { memo } from 'react';

export default memo(function UserCart() {
    return (
        <section>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <img src="../../static/images/5.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-6">
                                <div className="pizza-cart-detail">
                                    <h3>
                                        Cheese pizza
                                    </h3>
                                    <p className="mb-0 text-muted">Medium</p>
                                    <p className="mb-0 text-muted">Extra Cheese</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="pizza-cart-quantity d-flex">
                                    <button className="btn btn-outline-dark">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <input type="text" className="form-control form-control-sm" defaultValue="1" />
                                    <button className="btn btn-outline-dark">
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 mt-md-0 px-2 py-2">
                        <div className="w-100 bg-white shadow px-3 py-5 px-md-5">
                            <h5 className="d-flex justify-content-between mb-3">
                                <span>Sub. Total:</span>
                                <span>$5.50</span>
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
})
