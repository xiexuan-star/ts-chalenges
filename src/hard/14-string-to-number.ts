{
  // Convert a string literal to a number, which behaves like Number.parseInt.

  type StringToNumber<T extends string> = T extends `${ infer V extends number }` ? V : never
}
