'use strict';

const arithmetic = module.exports = {};

//Create validate input function
const validator = (arr) => {
  let bool;
    if (!Array.isArray(arr)) {
        bool = false;
    }
    arr.map(el => {
        if (typeof el != 'number') {
            bool = false;
        }
        if(typeof el == 'number') {
            bool = true;
        }
    });
    return bool;
};


//Create sum function
arithmetic.sum = (arr) => {
    if(typeof validator(arr)) {
        return arr.reduce((accumulator, el) => {
            return accumulator + el;
        });
    };
    if(!typeof validator(arr)) {
        return false;
    };
};


//Create subtract function
arithmetic.subtract = (arr) => {
    if(validator(arr)) {
        return arr.reduce((accumulator, el) => {
            return accumulator - el;
        });
    };
}


//Create multiply function
arithmetic.multiply = (arr) => {
    if(validator(arr)) {
        return arr.reduce((accumulator, el) => {
            return accumulator * el;
        });
    };
}


//Create divide function
arithmetic.divide = (arr) => {
    if(validator(arr)) {
        return arr.reduce((accumulator, el) => {
            if(el == 0) {
                return false;
            }
            else {
                return accumulator / el;
            }
        });
    };
}


//Sarkis - practicing with callbacks
arithmetic.calc = (arr, callback) => {
    callback(arr);
};



