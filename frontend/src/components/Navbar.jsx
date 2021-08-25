import React, {
    memo,
    useEffect,
    useRef,
} from 'react';

import {
    NavLink,
} from 'react-router-dom';

export default memo(function Navbar() {

    let navbar = useRef(null);

    useEffect(() => {
        function fixedNavbar() {
            navbar.classList.toggle('active', window.scrollY > 0)
        }
        document.addEventListener('scroll', () => {
            fixedNavbar();
        });
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-3" ref={el => navbar = el}>
            <div className="container">
                <NavLink className="navbar-brand text-uppercase fw-bold text-brand" to="/">Pizza</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/menu">Menu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/my-cart" activeClassName="active" exact className="nav-link position-relative">
                                <i className="fas fa-shopping-cart"></i>
                                <span className="ms-1">5</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
})
