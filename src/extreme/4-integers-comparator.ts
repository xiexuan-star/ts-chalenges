/*
  274 - Integers Comparator
  -------
  by Pig Fang (@g-plane) #extreme #template-literal #math

  ### Question

  Implement a type-level integers comparator. We've provided an enum for indicating the comparison result, like this:

  - If `a` is greater than `b`, type should be `Comparison.Greater`.
  - If `a` and `b` are equal, type should be `Comparison.Equal`.
  - If `a` is lower than `b`, type should be `Comparison.Lower`.

  **Note that `a` and `b` can be positive integers or negative integers or zero, even one is positive while another one is negative.**

  > View on GitHub: https://tsch.js.org/274
*/


/* _____________ Your Code Here _____________ */

enum Comparison {
  Greater,
  Equal,
  Lower,
}

type ABS<T extends number> = `${ T }` extends `-${ infer Value extends number }` ? Value : T;

type IsPositive<T extends number> = Equal<T, ABS<T>>;

type ArrayFromLength<T extends number, U extends any[] = []> = U['length'] extends T ? U : ArrayFromLength<T, [any, ...U]>;

type MoreThan<T extends number, U extends number> = ArrayFromLength<T> extends [...ArrayFromLength<U>, infer M, ...infer R] ? true : false;

type Comparator<A extends number, B extends number> =
  A extends B
    ? Comparison.Equal
    : IsPositive<A> extends true
      ? IsPositive<B> extends true
        ? MoreThan<A, B> extends true
          ? Comparison.Greater
          : Comparison.Lower
        : Comparison.Greater
      : IsPositive<B> extends true
        ? Comparison.Lower
        : MoreThan<ABS<A>, ABS<B>> extends true
          ? Comparison.Lower
          : Comparison.Greater ;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Comparator<5, 5>, Comparison.Equal>>,
  Expect<Equal<Comparator<5, 6>, Comparison.Lower>>,
  Expect<Equal<Comparator<5, 8>, Comparison.Lower>>,
  Expect<Equal<Comparator<5, 0>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, 0>, Comparison.Lower>>,
  Expect<Equal<Comparator<0, 0>, Comparison.Equal>>,
  Expect<Equal<Comparator<0, -5>, Comparison.Greater>>,
  Expect<Equal<Comparator<5, -3>, Comparison.Greater>>,
  Expect<Equal<Comparator<5, -7>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, -7>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, -3>, Comparison.Lower>>,
  Expect<Equal<Comparator<-25, -30>, Comparison.Greater>>,
  Expect<Equal<Comparator<15, -23>, Comparison.Greater>>,
  Expect<Equal<Comparator<40, 37>, Comparison.Greater>>,
  Expect<Equal<Comparator<-36, 36>, Comparison.Lower>>,
  Expect<Equal<Comparator<27, 27>, Comparison.Equal>>,
  Expect<Equal<Comparator<-38, -38>, Comparison.Equal>>,
]


/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/274/answer
  > View solutions: https://tsch.js.org/274/solutions
  > More Challenges: https://tsch.js.org
*/

