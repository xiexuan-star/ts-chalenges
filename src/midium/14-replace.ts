{
  // Implement Replace<S, From, To> which replace the string From with To once in the given string S

  // For example

  type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

  type Replace<T extends string, FROM extends string, TO extends string> = FROM extends '' ? T : (T extends `${ infer L }${ FROM }${ infer R }` ? `${ L }${ TO }${ R }` : T)
}
