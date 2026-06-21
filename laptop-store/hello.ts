interface User {
  name: string;
  id: number;
}
const myUser: User = { name: "Alice", id: 1 };

function greet(person: User): string {
  return `Hellow, ${person.name}! Your ID is ${person.id}`;
}
console.log(greet(myUser));
