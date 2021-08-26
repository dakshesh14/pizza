import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';


// importing redux related stuff
import { connect } from 'react-redux';
import { checkOldItems } from './store/cart/action'

// importing components
import Home from './components/Home';
import Menu from './components/Menu';
import UserCart from './components/UserCart';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App({ checkOldItems }) {

    useEffect(() => {
        checkOldItems();
    }, [])

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/my-cart" component={UserCart} />
            </Switch>
            <Footer />
        </Router>
    )
}

const mapDispatchToProps = {
    checkOldItems: () => checkOldItems(),
}


export default connect(
    null,
    mapDispatchToProps
)(App);