// src/App.js

import React from 'react';
import './App.css';
import Cars from './Cars';

import Provider from './context/Provider';

function App() {
  return (
    <main>
      <Provider>
        <Cars />
      </Provider>
    </main>
  );
}

export default App;
