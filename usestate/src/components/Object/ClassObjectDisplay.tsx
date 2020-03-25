import React, { Component } from 'react'

interface State {
  firstName: string;
  lastName: string;
}

interface Props {}

class ClassObjectDisplay extends Component <Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
  }

  handleFirstName = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      firstName: e.currentTarget.value
    });
  }

  handleLastName = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      lastName: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <h1>class component</h1>
        <form>
          <input type="text" value={this.state.firstName} onChange={this.handleFirstName} placeholder="your first name" />
          <input type="text" value={this.state.lastName} onChange={this.handleLastName} placeholder="your last name" />
        </form>
        <h3>My Name: {this.state.firstName} {this.state.lastName}</h3>
      </div>
    )
  }
}

export {
  ClassObjectDisplay
}