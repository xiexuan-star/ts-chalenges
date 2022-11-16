{
  // Given an array of strings, do Permutation & Combination. It's also useful for the prop types like video controlsList

// expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
  type Keys = Combination<['foo', 'bar', 'baz']>

  type Combination<T extends string[], U extends string = T[number], K = U> =
    K extends string
      ? K | `${ K } ${ Combination<[], Exclude<U, K>> }`
      : ''

  type Combination2<T extends string[], U = T[number], K = U> = K extends string ? K | `${ K } ${ Combination2<[], Exclude<U, K>> }` : '';

  // @ts-ignore
  declare const foo: Keys;
}
