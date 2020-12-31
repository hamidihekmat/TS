type Person = {
  name: string;
  age: number;
};

type Product = {
  name: string;
  price: number;
};
const names: Array<Person | Product> = [];

const alexandre: Person = {
  name: 'Alex',
  age: 23,
};

names.push(alexandre);

const apple: Product = {
  name: 'Apple',
  price: 2.99,
};

names.push(apple);

// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
//   return 'Completed';
// });

// Generics
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// Generic with contrains
function newMerge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

interface Length {
  length: number;
}

// Creating generic types
function countAndPrint<T extends Length>(element: T): [T, string] {
  let description = 'Got no value';
  if (element.length > 0) {
    description = `Got ${element.length} value`;
  }
  return [element, description];
}

// Keyof object using extends
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}
