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

// Generic Classes => allows only primitive types to only be used ONCE
class GenericStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItem() {
    return [...this.data];
  }
}

// String storage
const textStorage = new GenericStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
// Number storage
const numberStorage = new GenericStorage<number>();
numberStorage.addItem(23);
numberStorage.addItem(22);
numberStorage.removeItem(22);

interface CourseGoal {
  title: string;
  desciption: string;
  completeUntil: Date;
}

// Utility Types (Partial - Readonly)

// Partially append without justifiying type
function createCourseGoal(title: string, description: string, date: Date) {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  (courseGoal.desciption = description), (courseGoal.completeUntil = date);
  return courseGoal as CourseGoal;
}

// Readonly type
const people: Readonly<string[]> = ['Max', 'Anna'];

// Generic types lock in a type vs Union type allows type combination
