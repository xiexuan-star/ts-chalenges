{
  // Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.

  // For example

  type Arr = ['1', '2', '3']

  type Test = TupleToUnion2<Arr> // expected to be '1' | '2' | '3'

  type TupleToUnion<T extends readonly unknown[]> = T[number]

  type TupleToUnion2<T extends readonly unknown[]> = T extends [infer F, ...infer L] ? F | TupleToUnion2<L> : never
}
