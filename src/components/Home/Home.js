import React from 'react';
import '../../App.css';

import Register from './Register';
import Login from './Login';
import Or from './Or';

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
