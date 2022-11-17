{
  // Implement the advanced util type RequiredKeys<T>, which picks all the required keys into a union.

  // For example

  type Result = RequiredKeys<{ foo: number; bar?: string }>; // expected to be “foo”

  type RequiredKeys<T, U extends keyof T = keyof T> = U extends U ? {} extends Pick<T, U> ? never : U: never

  // @ts-ignore
  declare const foo:Result;
}
