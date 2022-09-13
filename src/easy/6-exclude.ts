{
  // Implement the built-in Exclude<T, U>
  // Exclude from T those types that are assignable to U

  // For example:

  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

  type MyExclude<T, P> = T extends P ? never : T
}
