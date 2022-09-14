type IAwaited<T> = T extends Promise<infer P> ? P : T;

declare const PromiseAll: <T extends any[]>(promises: readonly [...T]) => Promise<{ [K in keyof T]: IAwaited<T[K]> }>;

{
  // Type the function PromiseAll that accepts an array of PromiseLike objects, the returning value should be Promise<T> where T is the resolved result array.

  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = 2;
  // expected to be `Promise<[number, 42, string]>`
  const p = PromiseAll([promise1, promise2, promise3]);
}
