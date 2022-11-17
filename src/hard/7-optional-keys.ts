{
  // Implement the advanced util type OptionalKeys<T>, which picks all the optional keys into a union.

  type OptionalKeys<T, U extends keyof T = keyof T> = U extends U ? {} extends Pick<T, U> ? U : never : never
}
