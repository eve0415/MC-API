export { };

type ObjectKeys<T> =
    T extends { [key: unknown]: unknown } ?
        (keyof T)[] :
        T extends number ?
            [] :
            T extends unknown[] | string ?
                string[] :
                never;

declare global {
    interface ObjectConstructor {
        keys<T>(o: T): ObjectKeys<T>
    }
}
