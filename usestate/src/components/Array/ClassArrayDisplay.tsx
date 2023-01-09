import React from 'react'

interface Item {
  id: number;
  value: number;
}

interface State {
  items: Item[];
};

interface Props {}

class ClassArrayDisplay extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      items: [],
    }
  }

  addItem = () => {
    const id = this.state.items.length;
    const value = Math.floor(Math.random() * 100) + 1;
    const newItem = { id: id, value: value };
    this.setState((prevState: State) => {
      return {
        items: [...prevState.items, newItem],
      };
    });
  }
  render() {
    return (
      <div>
        <h1>class component</h1>
        <button onClick={this.addItem}>Add</button>
        <ul>
          {this.state.items.map(item => (
            <li key={item.id}>id:{item.id} {item.value}</li>
          ))}
        </ul>
    </div>
    )
  }
}

export {
  ClassArrayDisplay
}
