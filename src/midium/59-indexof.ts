{
  // Implement the type version of Array.indexOf, indexOf<T, U> takes an Array T, any U and returns the index of the first U in Array T.

  type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
  type Res1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
  type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1

  type IsEqual<A, B> =
    (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
      ? true : false;

  type IndexOf<T extends readonly unknown[], V, U extends readonly unknown[] = []> = T extends [infer First, ...infer Rest]
    ? IsEqual<First, V> extends true
      ? U['length']
      : IndexOf<Rest, V, [any, ...U]>
    : -1
}
