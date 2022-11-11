{
  // The Block, Element, Modifier methodology (BEM) is a popular naming convention for classes in CSS.

  // For example, the block component would be represented as btn, element that depends upon the block would be represented as btn__price, modifier that changes the style of the block would be represented as btn--big or btn__price--warning.

  // Implement BEM<B, E, M> which generate string union from these three parameters. Where B is a string literal, E and M are string arrays (can be empty).


  type BEM<B extends string, E extends readonly string[], M extends readonly string[]> = `${ B }${ E extends [] ? '' : `__${ E[number] }` }${ M extends [] ? '' : `--${ M[number] }` }`
}
