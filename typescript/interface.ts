interface Person {
    name: string;
    age: number;
    isDeveloper: boolean;
}

const person: Person = { name: 'Ricardo', age: 33, isDeveloper: true };
console.log(person);

interface add {
    (a: number, b: number): number;
}
const addFunction: add = (a, b) => a + b;
console.log(addFunction(1, 2));

export {};