{
  // Fill, a common JavaScript function, now let us implement it with types. Fill<T, N, Start?, End?>, as you can see,Fill accepts four types of parameters, of which T and N are required parameters, and Start and End are optional parameters. The requirements for these parameters are: T must be a tuple, N can be any type of value, Start and End must be integers greater than or equal to 0.

  type exp = Fill<[1, 2, 3, 4, 5], 0, 1, 2> // expected to be [0, 0, 0]
  // In order to simulate the real function, the test may contain some boundary conditions, I hope you can enjoy it :)

  type Fill<T extends readonly unknown[], V, Start extends number = 0, End extends number = T['length'], U extends readonly unknown[] = [], Flag = false> =
    T['length'] extends 0
      ? []
      : Start extends End
        ? T
        : T extends [infer First, ...infer Rest]
          ? U['length'] extends Start
            ? [V, ...Fill<Rest, V, Start, End, [any, ...U], true>]
            : U['length'] extends End
              ? [T[0], ...Fill<Rest, V, Start, End, [any, ...U]>]
              : Flag extends true
                ? [V, ...Fill<Rest, V, Start, End, [any, ...U], true>]
                : [T[0], ...Fill<Rest, V, Start, End, [any, ...U]>]
          : []
}
