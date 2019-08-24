import React from 'react';
import '../App.css';

import Register from './Home/Register';
import Login from './Home/Login';
import Or from './Home/Or';

const Home = () => {
    return (
        <main>
            <Register />
            <Or />
            <Login />
        </main>
    );
}

export default Home;
