import React from 'react';
import './App.css';
import { FCCounter, ClassCounter } from './components/Counter';
import { FCObjectDisplay } from './components/Object';
import { FCArrayDisplay } from './components/Array';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassCounter/> */}
        <br/>
        <FCCounter />
        {/* <br />
        <FCObjectDisplay/>
        <br/>
        <FCArrayDisplay/> */}
      </header>
    </div>
  );
}

export default App;
