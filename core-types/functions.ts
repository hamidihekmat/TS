// Return type is the return of the function
function add(n1: number, n2: number) {
  return n1 + n2;
}

// Another way of writing a function but declaring the return type
function multiply(n1: number, n2: number): string {
  return (n1 * n2).toString();
}

function addAndHandle(n1: number, n2: number, cb: (number: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
