import React from 'react';
import '../../App.css';

import Register from './Register';
import Login from './Login';

const Home = () => {
    return (
        <main>
            <Register />
            <p className='or'>OR</p>
            <Login />
        </main>
    );
}

export default Home;
