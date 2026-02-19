const myNumbers: number[] = [1, 2, 3, 4, 5];
const myStrings: string[] = ['a', 'b', 'c', 'd', 'e'];
const myBooleans: boolean[] = [true, false, true, false, true];
const myFixedMixed: (number | string | boolean)[] = [1, 'a', true, 2, 'b', false, 3, 'c', true];
const myMixedWithAnyType: any[] = [1, 'a', true, 2, 'b', false, 3, 'c', true];

console.log(myNumbers);
console.log(myStrings);
console.log(myBooleans);
console.log(myFixedMixed);
console.log(myMixedWithAnyType);

// Interface as a type
interface Person {
    name: string;
    age: number;
    isDeveloper: boolean;
}
const person: Person = { name: 'Ricardo', age: 33, isDeveloper: true };
console.log(person);

/**
 * Tuples are regular arrays at runtime, so you can push/pop; 
 * TypeScript just types them as a fixed-length structure. 
 * If you mutate length, the type no longer matches.
 */
const personTuple: [string, number] = ['Ricardo', 33];
personTuple.push('San Salvador'); // Allowed at runtime; type becomes misleading // Type still [string, number], but length is 3
// personTuple.push(false); // this will throw an error

// Optional tuples
const personTupleOptional: [string, number, string?] = ['Ricardo', 33, 'San Salvador'];
const personTupleOptional2: [string, number, string?] = ['Ricardo', 33];
console.log(personTupleOptional);
console.log(personTupleOptional2);

// Rest element: first two fixed, rest are strings
const personTupleRest: [string, number, ...string[]] = ['Ricardo', 33, 'San Salvador', 'New York', 'Los Angeles'];
console.log(personTupleRest);

// For truly immutable fixed-length data, you’d use readonly tuples:
const inmutableTuple: readonly [string, number] = ['Ricardo', 33];
// inmutableTuple.push('x');  // push does not exist in readonly tuples

/**
 * Enums are a way to define a set of named constants.
 * They are similar to objects, but they are not objects.
 * They are not compiled to JavaScript, so they are not included in the compiled code.
 */

enum MyEnum {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7,
}

console.log(MyEnum.Monday);

export {};