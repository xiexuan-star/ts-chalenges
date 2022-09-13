{
  // Implement a generic MyReadonly2<T, K> which takes two type argument T and K.

  // K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.

  // For example

  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  const testType: MyReadonly2<Todo, 'title' | 'description'> = {
    title: 'Hey',
    description: 'foobar',
    completed: false,
  };

  /*
  testType.title = 'Hello'; // Error: cannot reassign a readonly property
  testType.description = 'barFoo'; // Error: cannot reassign a readonly property
  */
  testType.completed = true; // OK

  type MyExclude<T, P extends T> = T extends P ? never : T;

  type MyReadonly2<T, P extends keyof T = keyof T> = {
    [K in MyExclude<keyof T, P>]: T[K]
  } & {
    readonly [K in P]: T[K]
  }
}
