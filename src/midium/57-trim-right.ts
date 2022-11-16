{
  // Implement TrimRight<T> which takes an exact string type and returns a new string with the whitespace ending removed.

  // For example:

  type Trimed = TrimRight<'   Hello World    '> // expected to be '   Hello World'

  type TrimRight<T extends string> = T extends `${ infer L }${ '\n' | '\t' | ' ' }` ? TrimRight<L> : T
}
