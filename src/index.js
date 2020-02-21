import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import TicTac from './Components/TicTac';
class App extends React.Component {

    render() {
        return (
            <div className="container">
                <TicTac />
            </div>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)