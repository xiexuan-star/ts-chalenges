{
  // Sometimes we want to limit the range of numbers... For examples.

  type result = NumberRange<20, 140> //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

  type NumberRange<Start extends number, End extends number, Result extends unknown[] = [], U extends readonly unknown[] = [], Flag = false> =
    U['length'] extends End
      ? [...Result, U['length']][number]
      : U['length'] extends Start
        ? NumberRange<Start, End, [...Result, U['length']], [unknown, ...U], true>
        : Flag extends true
          ? NumberRange<Start, End, [...Result, U['length']], [unknown, ...U], Flag>
          : NumberRange<Start, End, Result, [unknown, ...U], Flag>
}
