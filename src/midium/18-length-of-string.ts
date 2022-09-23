{
  // Compute the length of a string literal, which behaves like String#length.

  type length = LengthOfString<'string'>

  type LengthOfString<T extends string, N extends readonly string[] = []> = T extends `${ infer L }${ infer R }` ? LengthOfString<R, [...N, L]> : N['length']
}
