{
  // The enum is an original syntax of TypeScript (it does not exist in JavaScript). So it is converted to like the following form as a result of transpilation:

  let OperatingSystem;
  (function (OperatingSystem) {
    OperatingSystem[OperatingSystem['MacOS'] = 0] = 'MacOS';
    OperatingSystem[OperatingSystem['Windows'] = 1] = 'Windows';
    OperatingSystem[OperatingSystem['Linux'] = 2] = 'Linux';
  })(OperatingSystem || (OperatingSystem = {}));
  // In this question, the type should convert a given string tuple to an object that behaves like an enum. Moreover, the property of an enum is preferably a pascal case.

  type foo = Enum<['macOS', 'Windows', 'Linux']>
  // -> { readonly MacOS: "macOS", readonly Windows: "Windows", readonly Linux: "Linux" }
  // If true is given in the second argument, the value should be a number literal.

  type bar = Enum<['macOS', 'Windows', 'Linux'], true>
// -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }

  type Enum<T extends readonly string[],
    Auto = false,
    R = {}> =
    T extends readonly [...infer Rest extends string[], infer Last extends string]
      ? Enum<Rest, Auto, R & Record<Capitalize<Last>, Auto extends true ? Rest['length'] : Last>>
      : { readonly [K in keyof R]: R[K] }


  // @ts-ignore
  declare const f: bar;
}
