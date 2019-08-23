import React from 'react';
import logo from './logo.svg';
import './App.css';

import Register from './components/Register';
import Login from './components/Login';
import Or from './components/Or';

function App() {
  return (
    <main>
      <Register />
      <Or />
      <Login />
    </main>
  );
}

export default App;
