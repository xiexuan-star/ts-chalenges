{
  // Implement the type version of Lodash.uniq, Unique takes an Array T, returns the Array T without repeated values.

  type Res = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
  type Res1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
  type Res2 = Unique<[1, 'a', 2, 'b', 2, 'a']>; // expected to be [1, "a", 2, "b"]
  type Res3 = Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
  type Res4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]

  type IsEqual<A, B> =
    (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
      ? true : false;

  type Include<T, L extends readonly unknown[]> = L extends [infer First, ...infer Rest] ? IsEqual<T, First> extends true ? true : Include<T, Rest> : false;

  type Unique<T extends readonly unknown[], Res extends readonly unknown[] = []> = T extends [infer First, ...infer Rest] ? Include<First, Res> extends false ? Unique<Rest, [...Res, First]> : Unique<Rest, Res> : Res
}
