{
  // Given a number (always positive) as a type. Your type should return the number decreased by one.

  // For example:

  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<535> // 54

  // @ts-ignore
  declare const t: FiftyFour;
  // @ts-ignore
  declare const f: MinusOne<100>;

  type ParseInt<T extends string> = T extends `${infer Digit extends number}` ? Digit : never

  type LastOfString<T extends string> = T extends `${ infer L }${ infer R }` ? R extends '' ? L : `${ LastOfString<R> }` : T;

  type StringToArray<T extends string> = T extends `${ infer L }${ infer R }` ? [L, ...StringToArray<R>] : [];

  type ArrayToString<T extends Array<string>> = T extends [infer L extends string, ...infer R extends string[]] ? `${ L }${ ArrayToString<R> }` : ``;

  type ExcludeLastOfString<T extends string> = ArrayToString<StringToArray<T> extends [...infer L extends string[], infer R extends string] ? L : []>;

  type minusOneOfString<T extends string> = T extends '9' ? 8 : T extends '8' ? 7 : T extends '7' ? 6 : T extends '6' ? 5 : T extends '5' ? 4 : T extends '4' ? 3 : T extends '3' ? 2 : T extends '2' ? 1 : T extends '1' ? 0 : never

  type MinusOne<T extends number> =ParseInt<`${ExcludeLastOfString<`${T}`>}${minusOneOfString<LastOfString<`${ T }`>>}`>

  /**
   * // ------------------------------------ 字符串操作法, 可破递归陷阱 ---------------------------------
   * type ParseInt<T extends string> = T extends `${infer Digit extends number}` ? Digit : never
   * type ReverseString<S extends string> = S extends `${infer First}${infer Rest}` ? `${ReverseString<Rest>}${First}` : ''
   * type RemoveLeadingZeros<S extends string> = S extends '0' ? S : S extends `${'0'}${infer R}` ? RemoveLeadingZeros<R> : S
   * type InternalMinusOne<
   *   S extends string
   * > = S extends `${infer Digit extends number}${infer Rest}` ?
   *     Digit extends 0 ?
   *       `9${InternalMinusOne<Rest>}` :
   *     `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][Digit]}${Rest}`:
   *   never
   * type MinusOne<T extends number> = ParseInt<RemoveLeadingZeros<ReverseString<InternalMinusOne<ReverseString<`${T}`>>>>>
   * type test = MinusOne<9007199254740992>
    */

  /**
   * 方法描述：
   * 1. 翻转字符串
   * 2. 使开头一位字符数字减1, 当字符为0时, 开始递归减少下一位(虽然也是递归但是递归层级最大为数值位数)
   * 3. 翻转字符串
   * 4. 去除开头的0
   * 5. 将字符解析为数字
   */

  // ------------------------------------ break ---------------------------------

  type ArrayFromLength<T extends number, A extends 1[] = []> = A['length'] extends T ? A : ArrayFromLength<T, [1, ...A]>

  // 此法有性能问题, 递归创建数组的过程中会导致栈溢出
  type MinusOne2<T extends number> = ArrayFromLength<T> extends [1, ...infer R] ? R['length'] : 0
}
