"use strict";
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8; // this is a comment
var printResut = true;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printResut, resultPhrase);
console.log(result);
