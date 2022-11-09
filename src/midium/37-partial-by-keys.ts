{
  // Implement a generic PartialByKeys<T, K> which takes two type argument T and K.

  // K specify the set of properties of T that should set to be optional. When K is not provided, it should make all properties optional just like the normal Partial<T>.

  // For example

  interface User {
    name: string;
    age: number;
    address: string;
  }

  type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }

  type Merge<T> = {
    [K in keyof T]: T[K]
  }

  type PartialByKeys<T extends Object, K extends string | number | symbol = keyof T> = Merge<{ [KEY in keyof T as KEY extends K ? K : never]?: T[KEY] } & { [KEY in keyof T as KEY extends K ? never : KEY]: T[KEY] }>
}
