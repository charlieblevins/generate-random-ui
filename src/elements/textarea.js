import React, { Component } from 'react';

class Textarea extends Component {

    render() {
        const style = {
            'display': 'block'
        };
        return [
            <label htmlFor="ta" key="0" style={style}>Fill out the text area below</label>,
            <textarea type="text" name="ta" key="1"></textarea>
        ];
    }
}

export default Textarea;
