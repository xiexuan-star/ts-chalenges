{
  // Please complete type Integer<T>, type T inherits from number, if T is an integer return it, otherwise return never.

  type Integer<T extends number> = `${ T }` extends `${ infer L }.${ infer R }` ? never : number extends T ? never : T
}
