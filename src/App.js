import React, { Component } from 'react';
import RandomDOM from './lib/random-dom';
import './App.css';

class App extends Component {
    render() {

        const rd = new RandomDOM();
        const content = rd.contents();

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Random UI</h1>
                </header>
                <div id="random_content">
                    {content}
                </div>
            </div>
        );
    }
}

export default App;
