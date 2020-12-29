// Its better to use unknow instead of any => and do manually type checking to assign value to any
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// Check the type of unknow then assign it to variable
if (typeof userInput === 'string') {
  userName = userInput;
}

// Never type
function generateError(message: string, code: number) {
  throw {
    message,
    code,
  };
}
