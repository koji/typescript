import React from 'react';
import './App.css';
// import { ClassCounter, FCCounter } from './components/Counter';
import { ClassObjectDisplay, FCObjectDisplay } from './components/Object';
// import { ClassArrayDisplay, FCArrayDisplay } from './components/Array';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassCounter/>
        <br/>
        <FCCounter /> */}

        <ClassObjectDisplay/>
        <br />
        <FCObjectDisplay />

        {/* <ClassArrayDisplay/>
        <br />
        <FCArrayDisplay/> */}

      </header>
    </div>
  );
}

export default App;
