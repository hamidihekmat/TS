// Its better to use unknow instead of any => and do manually type checking to assign value to any
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
// Check the type of unknow then assign it to variable
if (typeof userInput === 'string') {
    userName = userInput;
}
// Never type
function generateError(message, code) {
    throw {
        message: message,
        code: code
    };
}
generateError('An error occured', 500);
