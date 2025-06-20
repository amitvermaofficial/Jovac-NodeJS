import { add, subtract, multiply, divide } from './mathOps.mjs'
import greet from "./greetings1.mjs";

const a = 10;
const b = 5;

console.log(greet('Amit'));

console.log("a + b: ", add(a, b));
console.log("a - b: ", subtract(a, b));
console.log("a * b: ", multiply(a, b));
console.log("a / b: ", divide(a, b));