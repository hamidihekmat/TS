enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

interface Person {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
}

const person: Person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log(person.role);
}
