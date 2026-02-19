function printMessage(message: string): void {
    console.log(message);
}
printMessage('Hello, world!');

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1, 2));

function greet(name: string, message?: string): string {
    return `Hello, ${name}! ${message ? message : ''}`;
}
console.log(greet('Ricardo'));
console.log(greet('Ricardo', 'How are you?'));

function multiplyAll(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc * curr, 1);
}
console.log(multiplyAll(1, 2, 3, 4, 5));

// default parameters
function greetWithDefault(name: string, message: string = 'Hello, world!'): string {
    return `Hello, ${name}! ${message}`;
}
console.log(greetWithDefault('Ricardo'));
console.log(greetWithDefault('Ricardo', 'How are you?'));

export {};
