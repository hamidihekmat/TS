function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8; // this is a comment
const printResut = true;
const resultPhrase = 'Result is: ';
const result = add(number1, number2, printResut, resultPhrase);
console.log(result);
