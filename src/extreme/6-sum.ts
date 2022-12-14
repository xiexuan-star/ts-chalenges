/*
  476 - Sum
  -------
  by null (@uid11) #extreme #math #template-literal

  ### Question

  Implement a type `Sum<A, B>` that summing two non-negative integers and returns the sum as a string. Numbers can be specified as a string, number, or bigint.

  For example,

  ```ts
  type T0 = Sum<2, 3> // '5'
  type T1 = Sum<'13', '21'> // '34'
  type T2 = Sum<'328', 7> // '335'
  type T3 = Sum<1_000_000_000_000n, '123'> // '1000000000123'
  ```

  > View on GitHub: https://tsch.js.org/476
*/


/* _____________ Your Code Here _____________ */
type ParseInt<T extends string | number> = T extends `${ infer V extends number }` ? V : 0;

type Length<T extends any[]> = T['length'] extends number ? T['length'] : never;

type ArrayFromString<T extends number, Result extends any[] = []> =
  Result['length'] extends T
    ? Result
    : ArrayFromString<T, [any, ...Result]>;

type Add<
  A extends number,
  B extends number,
  I extends boolean = false,
  S extends number = Length<[...ArrayFromString<A>, ...ArrayFromString<B>, ...(I extends true ? [any] : [])]>
> = `${ S }` extends `1${ infer V extends number }`
  ? [true, V, S]
  : [false, S, S];

type LastIndexOf<T extends string> = T extends `${ infer F }${ infer R }` ? R extends '' ? F : LastIndexOf<R> : '';

type PopString<T extends string, Result extends string = ''> =
  T extends `${ infer L }${ infer R }`
    ? R extends ''
      ? Result
      : PopString<R, `${ Result }${ L }`>
    : ''

type RemovePreZero<T extends string> = T extends `0${ infer V }` ? V extends '' ? T : RemovePreZero<V> : T;

type Sum<
  A extends string | number | bigint,
  B extends string | number | bigint,
  I extends boolean = false,
  Result extends string = '',
  AL extends string = LastIndexOf<`${ A }`>,
  BL extends string = LastIndexOf<`${ B }`>,
> =
  Add<ParseInt<AL>, ParseInt<BL>, I> extends [infer Increase extends boolean, infer Value extends number, infer V extends number]
    ? AL extends ''
      ? BL extends ''
        ? RemovePreZero<`${ V }${ Result }`>
        : Sum<PopString<`${ A }`>, PopString<`${ B }`>, Increase, `${ Value }${ Result }`>
      : Sum<PopString<`${ A }`>, PopString<`${ B }`>, Increase, `${ Value }${ Result }`>
    : never
  ;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Sum<2, 3>, '5'>>,
  Expect<Equal<Sum<'13', '21'>, '34'>>,
  Expect<Equal<Sum<'328', 7>, '335'>>,
  Expect<Equal<Sum<1_000_000_000_000n, '123'>, '1000000000123'>>,
  Expect<Equal<Sum<9999, 1>, '10000'>>,
  Expect<Equal<Sum<4325234, '39532'>, '4364766'>>,
  Expect<Equal<Sum<728, 0>, '728'>>,
  Expect<Equal<Sum<'0', 213>, '213'>>,
  Expect<Equal<Sum<0, '0'>, '0'>>,
]


/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/476/answer
  > View solutions: https://tsch.js.org/476/solutions
  > More Challenges: https://tsch.js.org
*/

