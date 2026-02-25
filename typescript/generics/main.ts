import Box from './box';
import identity from './identity';

// usage of the generic function with a string type
let output = identity<string>('myString');
console.log(output);

// usage of the generic function with a number type
let output2 = identity<number>(10);
console.log(output2);

// usage of the generic function with a boolean type
let output3 = identity<boolean>(true);
console.log(output3);

// usage of the generic class with a string type
let box = new Box<string>('myString');
console.log(box.getValue());

// usage of the generic class with a number type
let box2 = new Box<number>(10);
console.log(box2.getValue());

// usage of the generic class with a boolean type
let box3 = new Box<boolean>(true);
console.log(box3.getValue());