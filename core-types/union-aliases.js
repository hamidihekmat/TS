"use strict";
// We could also use enum
var convertorDesc;
(function (convertorDesc) {
    convertorDesc[convertorDesc["AS_NUMBER"] = 0] = "AS_NUMBER";
    convertorDesc[convertorDesc["AS_TEXT"] = 1] = "AS_TEXT";
})(convertorDesc || (convertorDesc = {}));
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combinedAges = combine(10, 120, 'as-number');
console.log(combinedAges);
var combinedNames = combine('Alex', 'Jones', 'as-text');
console.log(combinedNames);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
