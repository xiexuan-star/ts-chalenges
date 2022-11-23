{
  // The get function in lodash is a quite convenient helper for accessing nested values in JavaScript. However, when we come to TypeScript, using functions like this will make you lose the type information. With TS 4.1's upcoming Template Literal Types feature, properly typing get becomes possible. Can you implement it?

  // For example,

  type Data = {
    foo: {
      bar: {
        value: 'foobar',
        count: 6,
      },
      included: true,
    },
    hello: 'world'
  }

  type A = Get<Data, 'hello'> // 'world'
  type B = Get<Data, 'foo.bar.count'> // 6
  type C = Get<Data, 'foo.bar'> // { value: 'foobar', count: 6 }

  type Get<T, Path extends string> =
    Path extends ''
      ? never
      : Path extends keyof T
        ? T[Path]
        : Path extends `${ infer Prop extends string }.${ infer Rest }`
          ? Prop extends keyof T
            ? Get<T[Prop], Rest>
            : never
          : never
}
