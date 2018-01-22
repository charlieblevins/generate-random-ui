import React, { Component } from 'react';
import Paragraph from '../elements/paragraph';
import Link from '../elements/link';
import Search from '../elements/search';
import List from '../elements/list';

class RandomDOM extends Component {

    contents() {

        return [
            <Link key="0" />,
            <Paragraph key="1" />,
            <Search key="2" />,
            <List />
        ];
    }

    render() {
        const c = this.contents();
        return (
            {c}
        );
    }
}

export default RandomDOM;
