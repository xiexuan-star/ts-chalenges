{
  // Construct a tuple with a given length.

  // For example

  type result = ConstructTuple<2> // expect to be [unknown, unknown]

  type ConstructTuple<T extends number, Result extends readonly unknown[] = []> = Result['length'] extends T ? Result : ConstructTuple<T, readonly [unknown, ...Result]>
}
