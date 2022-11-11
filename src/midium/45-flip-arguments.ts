{
  // Implement the type version of lodash's _.flip.

  // Type FlipArguments<T> requires function type T and returns a new function type which has the same return type of T but reversed parameters.

  // For example:

  type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>
// (arg0: boolean, arg1: number, arg2: string) => void

  type Reverse<T extends readonly unknown[]> = T extends [infer F, ...infer R] ? [...Reverse<R>, F] : []

  type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer A) => infer R ? (...args: Reverse<A>) => R : never
}
