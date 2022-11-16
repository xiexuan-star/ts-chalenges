{
  // mplement the type version of Array.lastIndexOf, LastIndexOf<T, U> takes an Array T, any U and returns the index of the last U in Array T

  // For example:

  type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
  type Res2 = LastIndexOf<[0, 0, 0], 2> // -1

  type IsEqual<A, B> =
    (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
      ? true : false;

  type LastIndexOf<T extends readonly unknown[], V> = T extends [...infer Rest, infer Last] ? IsEqual<Last, V> extends true ? Rest['length'] : LastIndexOf<Rest, V> : -1
}
