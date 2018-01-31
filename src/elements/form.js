import React from 'react';
import RandomDOM from '../lib/random-dom';
import TextInput from '../elements/text-input';
import Textarea from '../elements/textarea';


const elements = [
    {
        'class': TextInput,
        'upper': 3,
        'lower': 0
    },
    {
        'class': Textarea,
        'upper': 3,
        'lower': 0
    }
];

class Form extends RandomDOM {

    constructor () {
        super(elements);
    }

    render() {
        const c = this.contents();
        return (
            <form action="#">
                <div class="form-inner">
                    {c}
                </div>
            </form>
        );
    }
}

export default Form;
