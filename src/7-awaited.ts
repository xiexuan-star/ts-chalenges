{
  //   If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?
  //   For example: if we have Promise<ExampleType> how to get ExampleType?

  type ExampleType = Promise<Promise<Promise<string>>>

  type Result = MyAwaited<ExampleType> // string

  type MyAwaited<T extends Promise<any>> = T extends Promise<infer P> ? P extends Promise<any> ? MyAwaited<P> : P : never
}
