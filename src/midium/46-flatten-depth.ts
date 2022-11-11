{
  // Recursively flatten array up to depth times.

  // For example:

  type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
  type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

  type ParseInt<T extends string> = T extends `${ infer Digit extends number }` ? Digit : never
  type ReverseString<S extends string> = S extends `${ infer First }${ infer Rest }` ? `${ ReverseString<Rest> }${ First }` : ''
  type RemoveLeadingZeros<S extends string> = S extends '0' ? S : S extends `${ '0' }${ infer R }` ? RemoveLeadingZeros<R> : S
  type InternalMinusOne<S extends string> = S extends `${ infer Digit extends number }${ infer Rest }` ?
    Digit extends 0 ?
      `9${ InternalMinusOne<Rest> }` :
      `${ [9, 0, 1, 2, 3, 4, 5, 6, 7, 8][Digit] }${ Rest }` :
    never
  type MinusOne<T extends number> = ParseInt<RemoveLeadingZeros<ReverseString<InternalMinusOne<ReverseString<`${ T }`>>>>>

  type FlattenOneDepth<T extends unknown[]> = T extends [infer F, ...infer R] ? [...(F extends any[] ? F : [F]), ...FlattenOneDepth<R>] : [];

  type NoNeedToFlatten<T extends unknown[]> = T extends [infer F, ...infer R] ? F extends any[] ? false : NoNeedToFlatten<R> : true

  type FlattenDepth<T extends unknown[], Depth extends number = 1, U extends any[] = []> = U['length'] extends Depth ? T : NoNeedToFlatten<T> extends true ? T : FlattenDepth<FlattenOneDepth<T>, Depth, [any, ...U]>;
}
