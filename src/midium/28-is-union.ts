{
  // Implement a type IsUnion, which takes an input type T and returns whether T resolves to a union type.

  // For example:

  type case1 = IsUnion<string>  // false
  type case2 = IsUnion<string | number>  // true
  type case3 = IsUnion<[string | number]>  // false

  type IsUnion<T, U = T> = [T] extends [never] ? false : U extends T ? Exclude<T, U> extends never ? false : true : true
}
