import { compose , pipe } from 'loadsh/fp'
import { Map } from 'immutable';
const input = "   HAMED   ";

const trim = str => str.trim()
const wrapInDiv = str => `<div>${str}</div>`
const wrapInSpan = (type) => (str) => `<${type}>${str}</${type}$>`;
const toLowerCase = str => str.toLowerCase()
const output =  wrapInDiv(toLowerCase(trim(input)))

const pCompose = pipe(trim, toLowerCase, wrapInSpan('span'));


console.log(pCompose(input));

function sum(a, b) {
  return a + b;
}

// refactor this method 

function curryingSum(a) {
    return function (b) {
        return a + b
    }
}
const argA = curryingSum(5);
console.log(argA(5));

// again refactors with arrow function
const curryingSumV2 = a => b => a + b
console.log(curryingSumV2(3)(3))

console.log(sum(1 , 2));