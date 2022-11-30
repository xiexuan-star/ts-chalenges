/*
  6141 - Binary to Decimal
  -------
  by wotsushi (@wotsushi) #hard #math

  ### Question

  Implement `BinaryToDecimal<S>` which takes an exact string type `S` consisting 0 and 1 and returns an exact number type corresponding with `S` when `S` is regarded as a binary.
  You can assume that the length of `S` is equal to or less than 8 and `S` is not empty.

  ```ts
  type Res1 = BinaryToDecimal<'10'>; // expected to be 2
  type Res2 = BinaryToDecimal<'0011'>; // expected to be 3
  ```

  > View on GitHub: https://tsch.js.org/6141
*/


/* _____________ Your Code Here _____________ */
type LengthArray<L extends number, Result extends any[] = []> = Result['length'] extends L ? Result : LengthArray<L, [...Result, any]>;

type Add<F extends number, S extends number> = [...LengthArray<F>, ...LengthArray<S>]['length'];

type Double<N extends number> = Add<N, N>;

type PowOfTwo<N extends number, Result = 1, U extends any[] = []> = U['length'] extends N ? Result : PowOfTwo<N, Double<Result extends number ? Result : never>, [any, ...U]>;

type StringLength<S extends string, U extends any[] = []> = S extends `${ infer L }${ infer R }` ? StringLength<R, [any, ...U]> : U['length'];

type BinaryToDecimal<S extends string> = S extends `${ infer F }${ infer R }` ? Add<F extends '1' ? PowOfTwo<StringLength<R>> : 0, BinaryToDecimal<R>> : 0;

type BinaryToDecimal2<
  S extends string,
  R extends unknown[] = []
> = S extends `${infer A}${infer B}`
  ? A extends '1'
    ? BinaryToDecimal2<B, [...R, ...R, unknown]>
    : BinaryToDecimal2<B, [...R, ...R]>
  : R['length']

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<BinaryToDecimal<'10'>, 2>>,
  Expect<Equal<BinaryToDecimal<'0011'>, 3>>,
  Expect<Equal<BinaryToDecimal<'00000000'>, 0>>,
  Expect<Equal<BinaryToDecimal<'11111111'>, 255>>,
  Expect<Equal<BinaryToDecimal<'10101010'>, 170>>,
]


/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/6141/answer
  > View solutions: https://tsch.js.org/6141/solutions
  > More Challenges: https://tsch.js.org
*/

