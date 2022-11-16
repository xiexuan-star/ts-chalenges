{
  // Get the middle element of the array by implementing a GetMiddleElement method, represented by an array
  // If the length of the array is odd, return the middle element If the length of the array is even, return the middle two elements
  // For example

  type simple1 = GetMiddleElement<[() => string, () => number]> // expected to be [3]
  type simple2 = GetMiddleElement<[1, 2, 3, 4, 5, 6]> // expected to be [3, 4]

  type NumberToArray<T extends number, U extends unknown[] = []> = U['length'] extends T ? U : NumberToArray<T, [unknown, ...U]>;

  type Shift<T extends unknown[]> = T extends [infer F, ...infer R] ? R : T

  type GetMiddleElement<T extends unknown[], L extends unknown[] = [], R extends unknown[] = Shift<NumberToArray<T['length']>>> =
    T extends [] ? [] :
      L['length'] extends R['length']
        ? [T[L['length']]]
        : [unknown, ...L]['length'] extends R['length']
          ? [T[L['length']], T[R['length']]]
          : GetMiddleElement<T, [unknown, ...L], Shift<R>>

  type GetMiddleElement2<T extends any[]> = T extends [infer L, ...infer M, infer R]
    ? M extends []
      ? [L, R]
      : GetMiddleElement<M>
    : T
}
