{
  // Implement the type version of Array.reverse

  // For example:

  type a = Reverse<['a', 'b']> // ['b', 'a']
  type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']

  type Reverse<T extends readonly unknown[]> = T extends [infer First, ...infer Rest] ? [...Reverse<Rest>, First] : []
}
