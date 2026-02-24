class Person {
    name: string;
    age: number;
    isDeveloper: boolean;

    constructor(name: string, age: number, isDeveloper: boolean) {
        this.name = name;
        this.age = age;
        this.isDeveloper = isDeveloper;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

export default Person;