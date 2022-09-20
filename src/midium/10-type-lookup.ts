{
  // Sometimes, you may want to lookup for a type in a union to by their attributes.

  // In this challenge, we would like to get the corresponding type by searching for the common type field in the union Cat | Dog. In other words, we will expect to get Dog for LookUp<Dog | Cat, 'dog'> and Cat for LookUp<Dog | Cat, 'cat'> in the following example.

  interface Cat {
    type: 'cat';
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
  }

  interface Dog {
    type: 'dog';
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
    color: 'brown' | 'white' | 'black';
  }

  type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
  type MyDogType2 = LookUp2<Cat | Dog, 'dog'> // expected to be `Dog`

  type LookUp<T, P> = T extends { type: P } ? T : never
  type LookUp2<T, P> = T extends { type: infer V } ? (V extends P ? T : never) : never
}
