{
  // Merge two types into a new type. Keys of the second type overrides keys of the first type.

  // For example

  type foo = {
    name: string;
    age: string;
  }
  type coo = {
    age: number;
    sex: string
  }

  type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}

  type Merge<T extends object, P extends object> = {
    [K in keyof T | keyof P]: K extends keyof P ? P[K] : K extends keyof T ? T[K] : never
  }
}
