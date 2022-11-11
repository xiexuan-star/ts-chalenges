{
  // Implement the type of just-flip-object. Examples:

  type a = Flip<{ a: 'x', b: 'y', c: 'z' }>; // {x: 'a', y: 'b', z: 'c'}
  type b = Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
  type c = Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}

  type Flip<T extends Record<keyof any, any>> = {
    [K in keyof T as K extends keyof any ? `${ T[K] }` : never]: K;
  };
}
