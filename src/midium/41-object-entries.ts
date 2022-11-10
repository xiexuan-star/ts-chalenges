{
  // Implement the type version of Object.entries

  // For example

  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }

  type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];

  type ObjectEntries<T, U extends keyof T = keyof T> = U extends U ? [U, Required<T>[U] extends undefined ? undefined : Required<T>[U]] : never
}
