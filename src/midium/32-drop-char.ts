{
  // Drop a specified char from a string.

  // For example:

  type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'

  type DropChar<T extends string, E extends string> = T extends `${ infer L }${ infer R }` ? L extends E ? `${ DropChar<R, E> }` : `${ L }${ DropChar<R, E> }` : T
}
