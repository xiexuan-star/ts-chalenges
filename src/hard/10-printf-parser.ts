{
  // There is a function in C language: printf. This function allows us to print something with formatting. Like this:

  // printf("The result is %d.", 42);
  // This challenge requires you to parse the input string and extract the format placeholders like %d and %f. For example, if the input string is "The result is %d.", the parsed result is a tuple ['dec'].

  // Here is the mapping:

  type ControlsMap = {
    c: 'char',
    s: 'string',
    d: 'dec',
    o: 'oct',
    h: 'hex',
    f: 'float',
    p: 'pointer',
  }

  type ParsePrintFormat<T extends string, Result extends string[] = []>
    = T extends `${ infer Left }%${ infer Key }${ infer Right }`
    ? ParsePrintFormat<`${ Left }${ Right }`, Key extends keyof ControlsMap ? [...Result, ControlsMap[Key]] : Result>
    : Result

  // @ts-ignore
  declare const foo: ParsePrintFormat<'the result is %q'>;
}
