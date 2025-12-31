import React from 'react';
import './App.css';
import { ClassObjectDisplay, FCObjectDisplay } from './components/Object';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassCounter/>
        <br/>
        <FCCounter /> */}
        <ClassObjectDisplay />
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
