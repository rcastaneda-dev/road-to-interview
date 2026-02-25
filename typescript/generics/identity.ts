// allows to pass in a type parameter to the function to make it more generic
export default function identity<T>(arg: T): T {
    return arg;
}
