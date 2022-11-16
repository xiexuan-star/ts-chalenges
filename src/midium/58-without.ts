{
  // Implement the type version of Lodash.without, Without<T, U> takes an Array T, number or array U and returns an Array without the elements of U.

  type Res = Without<[1, 2], 1>; // expected to be [2]
  type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
  type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []

  type Include<T, V> = V extends Array<infer E> ? T extends E ? true : false : T extends V ? true : false;

  type Without<T extends readonly unknown[], V> = T extends [infer First, ...infer Rest] ? Include<First, V> extends true ? Without<Rest, V> : [First, ...Without<Rest, V>] : []
}
