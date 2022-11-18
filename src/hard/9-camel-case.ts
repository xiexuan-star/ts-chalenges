{
  // Implement CamelCase<T> which converts snake_case string to camelCase.

  // For example

  type camelCase1 = CamelCase<'hello_world_with_types'> // expected to be 'helloWorldWithTypes'
  type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'> // expected to be same as previous one

  type IsCharacter<T extends string> = Uppercase<T> extends Lowercase<T> ? false : true

  type CamelCase<T extends string, Result extends string = '', Upper = false, IsFirstCharacter = true> =
    T extends `${ infer First }${ infer Rest }`
      ? CamelCase<Rest, `${ Result }${
      IsCharacter<First> extends false
        ? IsFirstCharacter extends true
          ? First
          : ''
        : Upper extends true
          ? Uppercase<First>
          : Lowercase<First> }`, IsCharacter<First> extends true
        ? false
        : true,
        IsFirstCharacter extends true
          ? IsCharacter<First> extends true
            ? false
            : true
          : false>
      : Result

  // @ts-ignore
  declare const foo: camelCase2;
}
