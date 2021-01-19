// src/App.js

import React from 'react';
import './App.css';
import Cars from './Cars';
import TrafficSignal from './TrafficSignal';
import Provider from './context/Provider';

function App() {
  return (
    <main>
      <Provider>
        <Cars />
        <TrafficSignal />
      </Provider>
    </main>
  );
}

export default App;
