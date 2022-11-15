{
  type a = GreaterThan<2, 1> //should be true
  type b = GreaterThan<1, 1> //should be false
  type c = GreaterThan<10, 100> //should be false
  type d = GreaterThan<111, 11>; //should be true

  type GreaterThan<T extends number, R extends number, U extends readonly any[] = []> = U['length'] extends T ? false : U['length'] extends R ? true : GreaterThan<T, R, [any, ...U]>
}
