import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MyComponent } from './MyComponent';

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello Typescript + React</h1>
                <MyComponent statement="this component was written by @koji" />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));