type paramsType = 'string' | 'number' | 'boolean';

type variants = 'sm' | 'md' | 'lg';
type cssClasses = `button-${variants}`;


// Conditional Types
type ConditionalType<T> = T extends 'string' ? string : T extends 'number' ? number : T extends 'boolean' ? boolean : never;

type conditionalType = ConditionalType<paramsType>;

// Conditional Types with multiple conditions
type isNumber<T> = T extends number ? true : false;

const isNumberFunction = <T>(value: T): isNumber<T> => {
    return (typeof value === 'number') as isNumber<T>;
}

console.log(isNumberFunction(1)); // true
console.log(isNumberFunction('1'));
console.log(isNumberFunction(true));
console.log(isNumberFunction(false));
console.log(isNumberFunction({}));
console.log(isNumberFunction([]));
console.log(isNumberFunction(null));
console.log(isNumberFunction(undefined));