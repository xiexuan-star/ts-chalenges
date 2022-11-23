{
  // Implement a type FilterOut<T, F> that filters out items of the given type F from the tuple T.

  // For example,

  type Filtered = FilterOut<[1, 2, null, 3], null> // [1, 2, 3]

  type FilterOut<T extends unknown[], V> = T extends [infer First, ...infer Rest] ? [First] extends [V] ? FilterOut<Rest, V> : [First, ...FilterOut<Rest, V>] : []
}
