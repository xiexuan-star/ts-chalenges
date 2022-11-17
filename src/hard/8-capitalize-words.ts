{
  // Implement CapitalizeWords<T> which converts the first letter of each word of a string to uppercase and leaves the rest as-is.

  // For example

  type capitalized = CapitalizeWords<'hello world, my friends'> // expected to be 'Hello World, My Friends'

  type CapitalizeWords<T extends string, Result extends string = '', Skip = false> =
    T extends `${ infer First }${ infer Rest }`
      ? CapitalizeWords<Rest, `${ Result }${ Skip extends true ? First : Uppercase<First> }`, Uppercase<First> extends Lowercase<First> ? false : true>
      : Result

  // @ts-ignore
  declare const foo: capitalized;
}
