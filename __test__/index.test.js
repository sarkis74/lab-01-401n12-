'use strict';

const greet = require('../lib/greet.js');
const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');


describe('#arithmetic.js TDD testing for math functions', () => {
    //Sarkis - Here will go arithmetic tests
    //Addition portion
    const testArr = [];
    let counter = 0;
    while (counter < 3) {
        testArr.push(faker.random.number({min: 0, max: 50}));
        counter++;
    }

    let testErr = arithmetic.sum([1, 2, 'a', null]);

    test('Testing returns error', () => {
        expect(testErr).toBe(undefined);
    });

    let arrSum = arithmetic.sum(testArr);

    test('Testing returns sum result', () => {

        expect(arrSum).toEqual(testArr[0] + testArr[1] + testArr[2]);
    });

    //Subtraction portion
    testErr = arithmetic.subtract([1, 2, 'a', null]);

    test('Testing returns error', () => {
        expect(testErr).toBe(undefined);
    });

    let arrMinus = arithmetic.subtract(testArr);

    test('Testing returns subtraction result', () => {

        expect(arrMinus).toEqual(testArr[0] - testArr[1] - testArr[2]);
    });


    //Multiplication portion
    testErr = arithmetic.multiply([1, 2, 'a', null]);

    test('Testing returns error', () => {
        expect(testErr).toBe(undefined);
    });

    let arrTimes = arithmetic.multiply(testArr);

    test('Testing returns multiply result', () => {

        expect(arrTimes).toEqual(testArr[0] * testArr[1] * testArr[2]);
    });


    //Division portion
    testErr = arithmetic.divide([1, 2, 'a', null]);

    test('Testing returns error', () => {
        expect(testErr).toBe(undefined);
    });

    let arrDivide = arithmetic.divide(testArr);

    test('Testing returns divide result', () => {

        expect(arrDivide).toEqual(testArr[0] / testArr[1] / testArr[2]);
    });
});


describe('#greet.js TDD testing for greet function',() => {
//Sarkis - Here will go greet tests
    const testName = faker.random.number();

    test('Returns null when NaS',() => {

        expect(greet.greeting(testName)).toEqual(null);
        expect(greet.greeting(undefined)).toEqual(null);

    });
    test('Returns hello world', () => {
        expect(greet.greeting('world')).toEqual('hello world');//Needs to return string
    })
});

//Testing Travis CI