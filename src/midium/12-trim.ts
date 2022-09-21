{
  // Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

  // For example

  type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'

  type Space = ' ' | '\t' | '\n'

  type Trim<T extends string> = T extends `${ Space }${ infer C }` ? Trim<C> : T extends `${ infer C }${ Space }` ? Trim<C> : T
}
