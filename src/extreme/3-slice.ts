/*
  216 - Slice
  -------
  by Anthony Fu (@antfu) #extreme #array

  ### Question

  Implement the JavaScript `Array.slice` function in the type system. `Slice<Arr, Start, End>` takes the three argument. The output should be a subarray of `Arr` from index `Start` to `End`. Indexes with negative numbers should be counted from reversely.

  For example

  ```ts
  type Arr = [1, 2, 3, 4, 5]
  type Result = Slice<Arr, 2, 4> // expected to be [3, 4]
  ```

  > View on GitHub: https://tsch.js.org/216
*/


/* _____________ Your Code Here _____________ */

type Unshift<T> = T extends [infer F, ...infer R] ? R : [];

type ArrayFromLength<T extends number, A extends any[] = []> =
  A['length'] extends T
    ? A
    : ArrayFromLength<T, [any, ...A]>

type MinusOne<T extends number> = ArrayFromLength<T> extends [any, ...infer R] ? R['length'] : 0;

type Minus<N extends number, S extends number, U extends any[] = ArrayFromLength<N>> = S extends 0
  ? U['length']
  : U['length'] extends 0
    ? 0
    : Minus<0, MinusOne<S>, U extends [infer F, ...infer R] ? R : []>

type IndexNormalize<Index extends number, Length extends number> = `${ Index }` extends `-${ infer Abs extends number }` ? Minus<Length, Abs> : Index

type Slice<Arr extends unknown[], Start extends number = 0, End extends number = Arr['length'], Length extends number = Arr['length'], Flag = false, Result extends unknown[] = [], U extends unknown[] = []> =
  Arr extends []
    ? Result
    : U['length'] extends IndexNormalize<End, Length>
      ? Result
      : U['length'] extends IndexNormalize<Start, Length>
        ? Slice<Unshift<Arr>, Start, End, Length, true, [...Result, Arr[0]], [...U, unknown]>
        : Flag extends true ? Slice<Unshift<Arr>, Start, End, Length, true, [...Result, Arr[0]], [...U, unknown]>
          : Slice<Unshift<Arr>, Start, End, Length, false, Result, [...U, unknown]>
  ;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type Arr = [1, 2, 3, 4, 5]

type cases = [
  // basic
  Expect<Equal<Slice<Arr, 0, 1>, [1]>>,
  Expect<Equal<Slice<Arr, 0, 0>, []>>,
  Expect<Equal<Slice<Arr, 2, 4>, [3, 4]>>,

  // optional args
  Expect<Equal<Slice<[]>, []>>,
  Expect<Equal<Slice<Arr>, Arr>>,
  Expect<Equal<Slice<Arr, 0>, Arr>>,
  Expect<Equal<Slice<Arr, 2>, [3, 4, 5]>>,

  // negative index
  Expect<Equal<Slice<Arr, 0, -1>, [1, 2, 3, 4]>>,
  Expect<Equal<Slice<Arr, -3, -1>, [3, 4]>>,

  // invalid
  Expect<Equal<Slice<Arr, 10>, []>>,
  Expect<Equal<Slice<Arr, 1, 0>, []>>,
  Expect<Equal<Slice<Arr, 10, 20>, []>>,
]


/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/216/answer
  > View solutions: https://tsch.js.org/216/solutions
  > More Challenges: https://tsch.js.org
*/

