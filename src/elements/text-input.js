import React, { Component } from 'react';

class TextInput extends Component {

    render() {
        const style = {
            'display': 'block'
        };
        return [
            <label htmlFor="1" key="0" style={style}>Fill out the text input below</label>,
            <input type="text" name="1" key="1" />
        ];
    }
}

export default TextInput;
