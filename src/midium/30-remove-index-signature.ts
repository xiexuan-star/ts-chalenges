{
  // Implement RemoveIndexSignature<T> , exclude the index signature from object types.

  // For example:

  type Foo = {
    [key: string]: any;
    foo(): void;
  }

  type A = RemoveIndexSignature<Foo>  // expected { foo(): void }

  type IsStringConst<T> = string extends T ? never : number extends T ? never : symbol extends T ? never : T;

  type RemoveIndexSignature<T extends Object> = {
    [K in keyof T as IsStringConst<K>]: T[K]
  }
}
