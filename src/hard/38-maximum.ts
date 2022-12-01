/*
  9384 - Maximum
  -------
  by ch3cknull (@ch3cknull) #hard #array

  ### Question

  ### Description
  Implements a type `Maximum`,  get array like type `T`, and return max value in `T`

  `0 <= T[number] < 1000`, so **nagative number not considered**.

  If `T` is a empty array `[]`, just reutrn `never`

  ```ts
  Maximum<[]> // never
  Maximum<[0, 2, 1]> // 2
  Maximum<[1, 20, 200, 150]> // 200
  ```
  ### Advanced
  Can you implement type `Minimum` inspired by `Maximum`?

  > View on GitHub: https://tsch.js.org/9384
*/


/* _____________ Your Code Here _____________ */
type ArrayFromLength<T extends number, U extends any[] = []> = U['length'] extends T
  ? U
  : ArrayFromLength<T, [any, ...U]>;
type MoreThan<T extends number, U extends number> = ArrayFromLength<T> extends [...ArrayFromLength<U>, infer M, ...infer R] ? true : false;

type Maximum<T extends number[], Result extends number | never = never> = T extends [infer F extends number, ...infer R extends number[]] ?
  Maximum<R, [Result] extends [never] ? F : MoreThan<F, Result> extends true ? F : Result>
  : Result;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Maximum<[]>, never>>,
  Expect<Equal<Maximum<[0, 2, 1]>, 2>>,
  Expect<Equal<Maximum<[1, 20, 200, 150]>, 200>>,
]


/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9384/answer
  > View solutions: https://tsch.js.org/9384/solutions
  > More Challenges: https://tsch.js.org
*/

