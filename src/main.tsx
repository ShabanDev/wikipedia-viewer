import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'bulma';

class App extends React.Component<{}, {}> {
    render(){
        return <h1>WikiViewer</h1>;
    }
}


ReactDOM.render(<App />, document.getElementById('app'));