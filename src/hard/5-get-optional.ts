{
  // Implement the advanced util type GetOptional<T>, which remains all the optional fields

  // For example

  type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }

  type GetOptional<T> = {
    [K in keyof T as {} extends Pick<T, K> ? K : never]: T[K]
  }
}
