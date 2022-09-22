{
  // Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

  // For example

  type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'

  type Capitalize<T extends string> = T extends `${ infer L }${ infer R }` ? `${ Uppercase<L>}${R}` : T
}
