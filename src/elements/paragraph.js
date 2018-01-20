import React, { Component } from 'react';
import lorem from 'lorem-ipsum';

class Paragraph extends Component {

    getText() {

        const rand = lorem({
            count: 5,
            units: 'sentences',
            sentenceLowerBound: 5,
            sentenceUpperBound: 15,
            paragraphLowerBound: 3,
            paragraphUpperBound: 7,
            format: 'plain',
            random: Math.random
        });

        return 'Please read this random paragraph, or pretend. ' + rand;
    }

    render() {
        const text = this.getText();
        return (
            <p>{text}</p>
        );
    }
}

export default Paragraph;
