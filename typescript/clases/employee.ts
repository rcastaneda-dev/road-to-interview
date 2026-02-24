import Person from './person';

class Employee extends Person {
    private salary: number;
    public nickname: string;

    constructor(name: string, age: number, isDeveloper: boolean, isConsultant: boolean, salary: number, nickname: string) {
        super(name, age, isDeveloper, isConsultant);
        this.salary = salary;
        this.nickname = nickname;
    }

    public work() {
        console.log(`I am working as an employee.`);
    }

    public setSalary(salary: number) {
        this.salary = salary;
    }

    public getSalary(): number {
        return this.salary;
    }   

    // In Person
   public getAgePublic(): number {
    return this.getAge();
   }

    public getNickname(): string {
        return this.nickname;
    }

    public greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log(`My salary is ${this.salary}`);
        console.log(`My nickname is ${this.nickname}`);
    }
}

export default Employee;