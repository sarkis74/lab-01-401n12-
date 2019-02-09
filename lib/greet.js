'use strict';


const greet = module.exports = {};

greet.greeting = (name) => {
    let input = typeof name == 'string' ? console.log(`hello ${name}`) : null;
    return input;
};

