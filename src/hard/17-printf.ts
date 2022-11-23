{
  // Implement Format<T extends string> generic.

  // For example,

  type FormatCase1 = Format<'%sabc'> // FormatCase1 : string => string
  type FormatCase2 = Format<'%s%dabc'> // FormatCase2 : string => number => string
  type FormatCase3 = Format<'sdabc'> // FormatCase3 :  string
  type FormatCase4 = Format<'sd%abc'> // FormatCase4 :  string

  type Format<T extends string> =
    T extends `${ infer Left }%${ infer Next }${ infer Last }`
      ? Next extends 's'
        ? (s: string) => Format<Last>
        : Next extends 'd'
          ? ((d: number) => Format<Last>)
          : Format<Last>
      : string;

  // @ts-ignore
  declare const foo: FormatCase2;
}
