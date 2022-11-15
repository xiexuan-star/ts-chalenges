{
  'use strict';
  // Implement a generic Fibonacci<T> that takes a number T and returns its corresponding Fibonacci number.

  // The sequence starts: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

  // For example

  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21

  type Fibonacci<T extends number, N1 extends any[] = [], N2 extends any[] = [any], U extends any[] = []> = U['length'] extends T ? N1['length'] : Fibonacci<T, N2, [...N2, ...N1], [any, ...U]>
}
