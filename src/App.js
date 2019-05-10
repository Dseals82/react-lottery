import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ball from './Ball';
import Lottery from './Lottery'

function App() {
  return (
    <div className="App">
    <h1>LOTTERY</h1>
      <Lottery />
      <Lottery title='Pick 4' maxNum={10} numBalls={4} />
      <Lottery title='Pick 3' maxNum={10} numBalls={3} />
    </div>
  );
}

export default App;
