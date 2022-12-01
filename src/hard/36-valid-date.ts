/*
  9155 - ValidDate
  -------
  by ch3cknull (@ch3cknull) #hard

  ### Question

  Implement a type `ValidDate`, which takes an input type T and returns whether T is a valid date.

  **Leap year is not considered**

  Good Luck!

  ```ts
  ValidDate<'0102'> // true
  ValidDate<'0131'> // true
  ValidDate<'1231'> // true
  ValidDate<'0229'> // false
  ValidDate<'0100'> // false
  ValidDate<'0132'> // false
  ValidDate<'1301'> // false
  ```

  > View on GitHub: https://tsch.js.org/9155
*/


/* _____________ Your Code Here _____________ */
type MonthOf31 = '01' | '03' | '05' | '07' | '08' | '10' | '12';

type StringToNumber<T extends string | number> = `${ T }` extends `${ infer V extends number }` ? V : never;

type LengthToArray<T extends number | string, U extends any[] = []> =
  U['length'] extends StringToNumber<T>
    ? U
    : LengthToArray<T, [any, ...U]>;

type IsValidMonth<T extends string> = LengthToArray<12> extends [...LengthToArray<T>, ...infer R] ? true : false;

type GetDayOfMonth<T extends string> = T extends MonthOf31 ? 31 : T extends '02' ? 28 : 30;

type IsValidDate<D extends string, M extends string, DNumber extends number = `${ D }` extends `${ infer V extends number }` ? V : never> =
  D extends '00'
    ? false
    : LengthToArray<GetDayOfMonth<M>> extends [...LengthToArray<D>, ...infer R]
      ? true
      : false;


type ValidDate<T extends string> =
  T extends `${ infer M1 extends number }${ infer M2 extends number }${ infer D1 extends number }${ infer D2 extends number }`
    ? IsValidMonth<`${ M1 }${ M2 }`> extends true
      ? IsValidDate<`${ D1 }${ D2 }`, `${ M1 }${ M2 }`>
      : false
    : false;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<ValidDate<'0102'>, true>>,
  Expect<Equal<ValidDate<'0131'>, true>>,
  Expect<Equal<ValidDate<'1231'>, true>>,
  Expect<Equal<ValidDate<'0229'>, false>>,
  Expect<Equal<ValidDate<'0100'>, false>>,
  Expect<Equal<ValidDate<'1232'>, false>>,
  Expect<Equal<ValidDate<'1301'>, false>>,
  Expect<Equal<ValidDate<'0123'>, true>>,
  Expect<Equal<ValidDate<'01234'>, false>>,
  Expect<Equal<ValidDate<''>, false>>,
]


/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9155/answer
  > View solutions: https://tsch.js.org/9155/solutions
  > More Challenges: https://tsch.js.org
*/

