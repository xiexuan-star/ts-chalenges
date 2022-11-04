{
  // From T, pick a set of properties whose type are assignable to U.

  // For Example

  type OnlyBoolean = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { isReadonly: boolean; isEnable: boolean; }

  type PickByType<T extends Object, V> = {
    [K in keyof T as T[K] extends V ? K : never]: T[K]
  }
}
