{
  // 实现 TS 内置的 Pick<T, K>，但不可以使用它。
//
// 从类型 T 中选择出属性 K，构造成一个新的类型。
//
// 例如：

  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
  };

// ------------------------------------ answer ---------------------------------

  type MyPick<O, P extends keyof O> = {
    [K in P]: O[K]
  }

}
