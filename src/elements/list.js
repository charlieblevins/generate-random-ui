import React, { Component } from 'react';
import _ from 'lodash';

class List extends Component {

    tag() {
        return _.sample(['ul', 'ol']);
    }

    items() {

        const num = _.random(1, 10);
        const items = [];

        for (var i = 0; i < num; i++) {
            items.push(
                React.createElement('li', null, 'item')
            );
        }

        return items;
    }

    render() {

        return React.createElement(
            this.tag(),
            [],
            this.items()
        );

    }
}

export default List;
