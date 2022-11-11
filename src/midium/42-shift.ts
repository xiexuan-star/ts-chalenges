{
  // Implement the type version of Array.shift

  // For example

  type Result = Shift<[3, 2, 1]> // [2, 1]

  type Shift<T extends readonly unknown[]> = T extends [infer First, ...infer Rest] ? Rest : T
}
