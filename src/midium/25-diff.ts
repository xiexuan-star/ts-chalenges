{
  // Get an Object that is the difference between O & O1

  type O1 = { name: string, age: string }
  type O2 = { name: string, age: string, gender: number }

  type O3 = Diff<O1, O2>;

  type Diff<O1 extends Object, O2 extends Object> = {
    [K in Exclude<keyof O1, keyof O2> | Exclude<keyof O2, keyof O1>]: K extends keyof O1 ? O1[K] : K extends keyof O2 ? O2[K] : never
  }
}
