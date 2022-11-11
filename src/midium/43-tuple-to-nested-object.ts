{
  // Given a tuple type T that only contains string type, and a type U, build an object recursively.

  type a = TupleToNestedObject<['a'], string> // {a: string}
  type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
  type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type

  type TupleToNestedObject<T extends readonly unknown[], V> = T extends [infer First, ...infer Rest] ? {
    [K in First as K extends keyof any ? K : never]: TupleToNestedObject<Rest, V>
  } : V
}
