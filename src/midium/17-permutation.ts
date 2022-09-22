{
  // Implement permutation type that transforms union types into the array that includes permutations of unions.

  type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

  type Permutation<U, C = U> = [U] extends [never] ? [] : U extends C ? [U, ...Permutation<Exclude<C, U>>] : never
}
