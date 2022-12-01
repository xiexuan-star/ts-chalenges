/*
  14188 - Run-length encoding
  -------
  by Hen Hedymdeith (@alfaproxima) #hard

  ### Question

  Given a `string` sequence of a letters f.e. `AAABCCXXXXXXY`. Return run-length encoded string `3AB2C6XY`.
  Also make a decoder for that string.

  > View on GitHub: https://tsch.js.org/14188
*/


/* _____________ Your Code Here _____________ */
type Length<T extends any[], L = T['length']> = L extends number ? L : 0;

type ArrayFromLength<T extends number, A extends any[] = []> =
  A['length'] extends T
    ? A
    : ArrayFromLength<T, [any, ...A]>

type Repeat<V extends string, T extends string, Result extends string = '', U extends any[] = []> =
  `${ U['length'] }` extends T
    ? Result
    : Repeat<V, T, `${ Result }${ V }`, [any, ...U]>

type Increase<T extends number> = Length<[...ArrayFromLength<T>, any]>

type IsNumberString<T extends string> = T extends `${ infer V extends number }` ? true : false;

namespace RLE {
  export type Encode<S extends string, PreChar extends string = '', Num extends number = 0, Result extends string = ''> =
    S extends `${ infer F }${ infer R }`
      ? F extends PreChar
        ? Encode<R, PreChar, Increase<Num>, Result>
        : Encode<R, F, 1, `${ Result }${ Num extends 0 | 1 ? '' : Num }${ PreChar }`>
      : `${ Result }${ Num extends 0 | 1 ? '' : Num }${ PreChar }`;

  export type Decode<S extends string, Num extends string = '', Result extends string = ''> = S extends `${ infer L }${ infer R }`
    ? IsNumberString<L> extends true
      ? Decode<R, `${ Num }${ L }`, Result>
      : Decode<R, '', `${ Result }${ Repeat<L, Num extends '' ? '1' : Num> }`>
    : Result;
}

declare const foo: RLE.Decode<'3AB2C6XY'>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  // Raw string -> encoded string
  Expect<Equal<RLE.Encode<'AAAAAAAAAAABCCXXXXXXY'>, '11AB2C6XY'>>,

  // Encoded string -> decoded string
  Expect<Equal<RLE.Decode<'11AB2C6XY'>, 'AAAAAAAAAAABCCXXXXXXY'>>,
]


/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/14188/answer
  > View solutions: https://tsch.js.org/14188/solutions
  > More Challenges: https://tsch.js.org
*/

