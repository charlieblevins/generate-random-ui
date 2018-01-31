import React, { Component } from 'react';
import RandomDOM from './lib/random-dom';
import './normalize.css';
import './skeleton.css';
import './App.css';

import Paragraph from './elements/paragraph';
import Link from './elements/link';
import Search from './elements/search';
import List from './elements/list';
import Form from './elements/form';

const elements = [
    {
        'class': Link,
        'upper': 3,
        'lower': 0
    },
    {
        'class': Paragraph,
        'upper': 3,
        'lower': 0
    },
    {
        'class': Search,
        'upper': 3,
        'lower': 0
    },
    {
        'class': List,
        'upper': 3,
        'lower': 0
    },
    {
        'class': Form,
        'upper': 3,
        'lower': 0
    }
];

class App extends Component {
    render() {

        const rd = new RandomDOM(elements);
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
