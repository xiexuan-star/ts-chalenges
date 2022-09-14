// Chainable options are commonly used in Javascript. But when we switch to TypeScript, can you properly type it?

// In this challenge, you need to type an object or a class - whatever you like - to provide two function option(key, value) and get(). In option, you can extend the current config type by the given key and value. We should about to access the final result via get.

// For example
declare const config: Chainable;

type __Exclude<T, K> = T extends K ? never : T

type __Omit<T, P> = { [K in __Exclude<keyof T, P>]: T[K] };

type Chainable<T = object> = {
  option<K extends string, V>(key: K, value: V): Chainable<__Omit<T, K> & { [Key in K]: V }>

  get(): T
}

{
  const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get();

// expect the type of result to be:
  interface Result {
    foo: number;
    name: string;
    bar: {
      value: string
    };
  }
}
