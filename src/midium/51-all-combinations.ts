{
  // Implement type AllCombinations<S> that return all combinations of strings which use characters from S at most once.

  // For example:

  type AllCombinations_ABC = AllCombinations<'ABC'>;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'

  type StringToUnion<T extends string> = T extends `${ infer Left }${ infer Rest }` ? Left | StringToUnion<Rest> : ''

  type Combinations<T extends string, U = T> = U extends T ? U | `${ U }${ Combinations<Exclude<T, U>> }` : never

  type AllCombinations<T extends string> = Combinations<StringToUnion<T>>

  // @ts-ignore
  declare const foo: AllCombinations_ABC;
}
