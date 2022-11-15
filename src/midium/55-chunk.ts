{
  // Do you know lodash? Chunk is a very useful function in it, now let's implement it. Chunk<T, N> accepts two required type parameters, the T must be a tuple, and the N must be an integer >=1

  type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
  type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
  type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]

  type Shift<T extends readonly unknown[]> = T extends [infer First, ...infer Rest] ? Rest : T;

  type Chunk<T extends readonly unknown[], N extends number, Current extends unknown[] = [], Res extends unknown[] = []> =
    T['length'] extends 0
      ? Current['length'] extends 0
        ? Res
        : [...Res, Current]
      : Current['length'] extends N
        ? Chunk<T, N, [], [...Res, Current]> : Chunk<Shift<T>, N, [...Current, T[0]], Res>;
}
