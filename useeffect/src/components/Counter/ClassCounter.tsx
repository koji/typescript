import React from 'react'

interface Props {
}

interface State {
  counter: number;
}

export class ClassCounter extends React.Component <Props,State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  componentDidMount = () => {
    document.title = `You Clicked ${this.state.counter} times`;
  }

  componentDidUpdate = (prevProps: Props, prevState: State) => {
    if(prevState.counter !== this.state.counter) {
      document.title = `You Clicked ${this.state.counter} times`;
    }
  }

  // +1
  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  // -1
  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  // reset count
  handleReset = () => {
    this.setState({
      counter: 0
    });
  }

  // +10
  handleIncrementTen = () => {
    this.setState({
      counter: this.state.counter + 10,
    });
  }

  render() {
    return (
      <div>
        <p>Class-Count {this.state.counter}</p>
        <br/>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDecrement}>decrement</button>
        <button onClick={this.handleReset}>reset</button>
        <br />
        <button onClick={this.handleIncrementTen}>increment10</button>
      </div>
    )
  }
}