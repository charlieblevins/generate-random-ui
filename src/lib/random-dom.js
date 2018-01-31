import React, { Component } from 'react';
import _ from 'lodash';

class RandomDOM extends Component {

    constructor (elements) {
        super();
        this.elements = elements;
    }

    contents() {

        // 1. collect and shuffle
        const collection = _.shuffle(this.collect());

        // 2. create and shuffle
        return _.shuffle(this.create(collection));
    }

    /**
     * Generate a list of element classes duplicated a random
     * number of times between the upper and lower bounds defined in 
     * elements below.
     * @returns {array}
     */
    collect () {
        const collection = [];

        this.elements.forEach(el => {
    
            const count = _.random(el.lower, el.upper);         

            for (var i = 0; i < count; i++) {
                collection.push(el.class);
            }
        });

        return collection;
    }

    /**
     * Create each element in the collection
     * @returns {array}
     */
    create (collection) {

        return collection.map((el, i) => {
            return React.createElement(el, {key: i}, null);
        });
    }

    render() {
        return this.contents();
    }
}

export default RandomDOM;
