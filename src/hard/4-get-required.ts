{
  // Implement the advanced util type GetRequired<T>, which remains all the required fields

  // For example

  type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }

  type GetRequired<T> = {
    [K in keyof T as {} extends Pick<T, K> ? never : K]: T[K]
  }
}
