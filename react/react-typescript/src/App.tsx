import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';
import Calc from './Calc';

const initialState = {
  name: "Test",
  message: "Hello!!!",
}

type State = Readonly<typeof initialState>;

class App extends Component<any, State> {
  readonly state:State = initialState;
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  calc = new Calc(10, 20);

  render() {
    const myMsg: string = "Hello World!";
    let aTuple: [string, number] = ["hello", 10];
    // enum
    enum Codes {first=1 , second=2};
    // any
    let myFirstName: any = "kk"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {myMsg} is of {typeof myMsg}
          </p>
          <p>
            {aTuple[0]} and {aTuple[1]}
          </p>
          <p>
            {myFirstName}
          </p>
          <Message 
            name={this.state.name}
            message={this.state.message}
          />
          <p>
            {this.calc.add()}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
