{
  // Implement a type IsTuple, which takes an input type T and returns whether T is tuple type.

  // For example:

  type case1 = IsTuple<[number]> // true
  type case2 = IsTuple<readonly [number]> // true
  type case3 = IsTuple<number[]> // false

  type NotEqual<A, B> =
    (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
      ? false : true;

  type IsNever<T> = [T] extends [never] ? true : false;

  type IsTuple<T> = IsNever<T> extends true ? false : T extends readonly unknown[] ? NotEqual<T['length'], number> : false
}
