{
  // Convert a property of type literal (label type) to a primitive type.

  // For example

  type X = {
    name: 'Tom',
    age: 30,
    married: false,
    addr: {
      home: '123456',
      phone: '13111111111'
    }
  }

  type Expected = {
    name: string,
    age: number,
    married: boolean,
    addr: {
      home: string,
      phone: string
    }
  }


  type Todo = ToPrimitive<X> // should be same as `Expected`

  type ToPrimitive<T> = T extends string
    ? string
    : T extends number
      ? number
      : T extends boolean
        ? boolean
        : T extends bigint
          ? bigint
          : T extends symbol
            ? symbol
            : T extends object
              ? { [K in keyof T]: ToPrimitive<T[K]> }
              : never
}
