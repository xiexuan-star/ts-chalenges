{
  // Given an array of unique elements, return all possible subsequences.

  // A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.

  // For example:

  type A = Subsequence<[1, 2, 3]> // [] | [1] | [2] | [1, 2]

  type Subsequence<T extends unknown[]> = T extends [infer First, ...infer Rest] ? Subsequence<Rest> | [First, ...Subsequence<Rest>] : [];

  // @ts-ignore
  declare const foo: A;
}
