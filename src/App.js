import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import Home from './components/Home';
import Board from './components/Board';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/board" component={Board} />
      </main>
    </BrowserRouter>
  );
}

export default App;
