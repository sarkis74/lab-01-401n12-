'use strict';


const greet = module.exports = {};

greet.greeting = (name) => {
    let input = name
        if(typeof input == 'string') {
            return `hello ${input}`;
        }
        else {
            return null;
        }
};

