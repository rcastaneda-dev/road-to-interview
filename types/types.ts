type Person = {
    name: string;
    age: number;
}

const person: Person = {
    name: 'Ricardo',
    age: 33,
}

console.log(person);

type PartialType<T> = {
    [P in keyof T]?: T[P];
}

type personPartial = PartialType<Person>;
/**
 * El mapped type de personaPartial es el siguiente:
 * {
 *  name?: string;
 *  age?: number;
 * }
 * 
 * Significa que personaPartial es un objeto que puede tener las propiedades name y age, 
 * pero no son obligatorias.
 */