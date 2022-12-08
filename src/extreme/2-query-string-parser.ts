/*
  151 - Query String Parser
  -------
  by Pig Fang (@g-plane) #extreme #template-literal

  ### Question

  You're required to implement a type-level parser to parse URL query string into a object literal type.

  Some detailed requirements:

  - Value of a key in query string can be ignored but still be parsed to `true`. For example, `'key'` is without value, so the parser result is `{ key: true }`.
  - Duplicated keys must be merged into one. If there are different values with the same key, values must be merged into a tuple type.
  - When a key has only one value, that value can't be wrapped into a tuple type.
  - If values with the same key appear more than once, it must be treated as once. For example, `key=value&key=value` must be treated as `key=value` only.

  > View on GitHub: https://tsch.js.org/151
*/


/* _____________ Your Code Here _____________ */
type Split<T extends string, S extends string, Result extends string[] = []> =
  T extends `${ infer First }${ S }${ infer Rest }`
    ? Split<Rest, S, [...Result, First]>
    : T extends ''
      ? Result
      : [...Result, T]

type Arrayed<T> = T extends any[] ? T : [T]

type ParseKeyValue<T extends string> = T extends `${ infer K }=${ infer V }` ? [K, V] : [T, true]

type ParseQueryString<T extends string, Entries extends string[] = Split<T, '&'>, Result extends Record<any, any> = {}> = Entries extends [infer F extends string, ...infer R extends string[]]
  ? ParseQueryString<'', R, ParseKeyValue<F> extends [infer K extends string, infer V]
    ? {
      [KEY in (keyof Result) | K]: KEY extends keyof Result
        ? KEY extends K
          ? Equal<Result[KEY], V> extends true
            ? V
            : [...Arrayed<Result[KEY]>, V]
          : Result[KEY]
        : V;
    }
    : never>
  : { [K in keyof Result]: Result[K] };

declare const foo: ParseQueryString<'k1=v1&k2=v2'>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<ParseQueryString<''>, {}>>,
  Expect<Equal<ParseQueryString<'k1'>, { k1: true }>>,
  Expect<Equal<ParseQueryString<'k1&k1'>, { k1: true }>>,
  Expect<Equal<ParseQueryString<'k1&k2'>, { k1: true; k2: true }>>,
  Expect<Equal<ParseQueryString<'k1=v1'>, { k1: 'v1' }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k1=v2'>, { k1: ['v1', 'v2'] }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k2=v2'>, { k1: 'v1'; k2: 'v2' }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k2=v2&k1=v2'>, { k1: ['v1', 'v2']; k2: 'v2' }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k2'>, { k1: 'v1'; k2: true }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k1=v1'>, { k1: 'v1' }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k2=v2&k1=v2&k1=v3'>, { k1: ['v1', 'v2', 'v3']; k2: 'v2' }>>,
]


/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/151/answer
  > View solutions: https://tsch.js.org/151/solutions
  > More Challenges: https://tsch.js.org
*/

