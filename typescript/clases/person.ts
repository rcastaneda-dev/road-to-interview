class Person {
    public name: string;
    protected age: number;
    private isDeveloper: boolean;
    #isConsultant: boolean;

    constructor(name: string, age: number, isDeveloper: boolean, isConsultant: boolean) {
        this.name = name;
        this.age = age;
        this.isDeveloper = isDeveloper;
        this.#isConsultant = isConsultant;
    }

    public greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log(`I am a developer: ${this.isDeveloper}`);
        console.log(`I am a consultant: ${this.#isConsultant}`);
    }

    protected getAge() {
        return this.age;
    }

    private getIsDeveloper() {
        return this.isDeveloper;
    }

    #getIsConsultant() {
        return this.#isConsultant;
    }
}

export default Person;