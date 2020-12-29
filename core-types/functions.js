"use strict";
// Return type is the return of the function
function add(n1, n2) {
    return n1 + n2;
}
// Another way of writing a function but declaring the return type
function multiply(n1, n2) {
    return (n1 * n2).toString();
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
