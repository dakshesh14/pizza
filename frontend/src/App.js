import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

// importing store related stuff
import { Provider } from 'react-redux';

import store from './store/store';

// importing components
import Home from './components/Home';
import Menu from './components/Menu';
import UserCart from './components/UserCart';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/menu" component={Menu} />
                    <Route exact path="/my-cart" component={UserCart} />
                </Switch>
                <Footer />
            </Router>
        </Provider>
    )
}

export default App
