{
  // Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S

  // For example

  type replaced = ReplaceAll<'foobar', 'ob', 'b'> // expected to be 'types'

  type ReplaceAll<T extends string, FROM extends string, TO extends string> = FROM extends '' ? T : (T extends `${ infer L }${ FROM }${ infer R }` ? `${ L }${TO}${ ReplaceAll<R, FROM, TO> }` : T)
}
