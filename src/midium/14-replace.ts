{
  // Implement Replace<S, From, To> which replace the string From with To once in the given string S

  // For example

  type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

  type Replace<T extends string, PLACE extends string, TARGET extends string> = PLACE extends '' ? T : (T extends `${ infer L }${ PLACE }${ infer R }` ? `${ L }${ TARGET }${ R }` : T)
}
