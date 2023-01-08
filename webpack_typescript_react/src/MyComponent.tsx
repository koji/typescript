import * as React from 'react';

interface Props {
    statement: string;
}

interface State {
    counter: number;
}

export class MyComponent extends React.Component<Props, State> {

    constructor(props:Props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    handleClick() {
        console.log("clicked");
        this.setState((prevState: State) =>{
            return {counter: prevState.counter  + 1,}
        });
    }


    render() {
        return(
            <div>
                <h2>{this.props.statement}</h2>
                <div>{this.state.counter}</div>
                <button onClick={this.handleClick.bind(this)}>+1</button>
            </div>
        );
    }

}



