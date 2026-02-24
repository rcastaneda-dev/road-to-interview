import Employee from "./employee";
import Person from "./person";

const ricardo: Person = new Person('Ricardo', 33, true, true);
const rodrigo: Employee = new Employee('Rodrigo', 30, true, true, 10000, 'rodrigo');

console.log(rodrigo.greet());
console.log(ricardo.greet());

