{
  // Implement a generic RequiredByKeys<T, K> which takes two type argument T and K.

  // K specify the set of properties of T that should set to be required. When K is not provided, it should make all properties required just like the normal Required<T>.

  // For example

  interface User {
    name?: string;
    age?: number;
    address?: string;
  }

  type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }

  type Merge<T> = {
    [K in keyof T]: T[K]
  }

  type RequiredByKeys<T, K extends keyof T = keyof T> = Merge<Required<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>>
}
