import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';

function App() {
  return (
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2> suck my dick </h2>
    </header>
    </div>
  );
}

function initializeReactGA() {
  ReactGA.initialize('UA-139993353-1');
  ReactGA.pageview('/homepage');
}

export default App;
