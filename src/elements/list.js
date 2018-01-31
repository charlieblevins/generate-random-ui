import React, { Component } from 'react';
import _ from 'lodash';

class List extends Component {

    tag() {
        return _.sample(['ul', 'ol']);
    }

    items() {

        const num = _.random(2, 15);
        const items = [];

        for (var i = 0; i < num; i++) {
            items.push(
                React.createElement('li', {key: i}, 'item')
            );
        }

        return items;
    }

    render() {
        return React.createElement(
            this.tag(),
            null,
            this.items()
        );
    }
}

export default List;
