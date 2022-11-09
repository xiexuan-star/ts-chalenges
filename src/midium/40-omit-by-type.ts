{
  // From T, pick a set of properties whose type are not assignable to U.

  // For Example

  type OmitBoolean = OmitByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { name: string; count: number }

  type OmitByType<O, T> = {
    [K in keyof O as O[K] extends T ? never : K]: O[K]
  }
}
