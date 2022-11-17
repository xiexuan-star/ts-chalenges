{
  // Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.

  // For example:
  // The function passed to Currying may have multiple arguments, you need to correctly type it.

  // In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.

  const add = (a: number, b: number) => a + b;
  const three = add(1, 2);

  const curriedAdd = Currying(add);
  const five = curriedAdd(2)(3);

  // @ts-ignore
  declare function Currying<T>(fn: T): CurryType<T>

  type Shift<T extends unknown[]> = T extends [infer F, ...infer R] ? R : T;

  type CurryType<Fn> = Fn extends (...args: infer Args) => infer Return?
    Args['length'] extends 0
      ? Fn
      : Args['length'] extends 1
        ? (arg: Args[0]) => Return
        : (args: Args[0]) => CurryType<(...args: Shift<Args>) => Return>
    : never
}
