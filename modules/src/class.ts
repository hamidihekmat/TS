class Department {
  private _name: string;
  private _age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
  sayHello() {
    console.log(`Hello I am ${this._name} and I am ${this._age} years old.`);
  }
}

const alex = new Department('Alex', 21);
alex.sayHello();
