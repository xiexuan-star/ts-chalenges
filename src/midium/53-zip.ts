{
  // In This Challenge, You should implement a type Zip<T, U>, T and U must be Tuple

  type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]

  type Zip<K extends readonly unknown[], V extends readonly unknown[]> = [K, V] extends [[infer L, ...infer R], [infer L2, ...infer R2]] ? [[L, L2], ...Zip<R, R2>] : []
}
