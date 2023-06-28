"use strict";
// Function Types(parameter,return,anonymous/callback)
// function signature,optional parameter/default parameter
// implicitly any type ... no return means void
function add(num1, num2) {
    console.log(num1 + num2);
}
add(10, 20);
// return type number
function multiply(num1, num2) {
    return num1[0] * num2;
}
var result = multiply([10], 20); // arrow 0 index 10
console.log(result);
// arrow function
var divisible = function (num1, num2) {
    return num1 / num2;
};
var res = divisible(10, 2);
console.log(res);
var mul = function (num1, num2, num3) {
    return num1 * num2 * (num3 || 0);
};
var mulRes = mul(12, 13, 2);
console.log(mulRes);
var add1 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (pre, curr) { return pre + curr; }, 0);
};
var result1 = add1(10, 20, 23, 23);
console.log(result1);
