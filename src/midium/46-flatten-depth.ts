{
  // Recursively flatten array up to depth times.

  // For example:

  type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
  type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

  type FlattenOneDepth<T extends unknown[]> = T extends [infer F, ...infer R] ? [...(F extends any[] ? F : [F]), ...FlattenOneDepth<R>] : [];

  type NoNeedToFlatten<T extends unknown[]> = T extends [infer F, ...infer R] ? F extends any[] ? false : NoNeedToFlatten<R> : true

  type FlattenDepth<T extends unknown[], Depth extends number = 1, U extends any[] = []> = U['length'] extends Depth ? T : NoNeedToFlatten<T> extends true ? T : FlattenDepth<FlattenOneDepth<T>, Depth, [any, ...U]>;
}
