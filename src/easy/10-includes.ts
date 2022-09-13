{
  // Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. The output should be a boolean true or false.

  // For example:

  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  type test = Includes<[1, 2, 3, 'bar'], 3>

  type Includes<T extends readonly unknown[], U> = T extends [infer A, ...infer L] ? Equal<U, A> extends true ? true : Includes<L, U> : false

  type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false
  // 下面这个方法无法判断 readonly字段
  // type Equal<X, Y> = X extends Y ? Y extends X ? true : false : false;
}
