{
  // Implement PercentageParser. According to the /^(\+|\-)?(\d*)?(\%)?$/ regularity to match T and get three matches.

  // The structure should be: [plus or minus, number, unit] If it is not captured, the default is an empty string.

  // For example:

  type PString1 = ''
  type PString2 = '+85%'
  type PString3 = '-85%'
  type PString4 = '85%'
  type PString5 = '85'
  type PString6 = '+85'

  type R1 = PercentageParser<PString1> // expected ['', '', '']
  type R2 = PercentageParser<PString2> // expected ["+", "85", "%"]
  type R3 = PercentageParser<PString3> // expected ["-", "85", "%"]
  type R4 = PercentageParser<PString4> // expected ["", "85", "%"]
  type R5 = PercentageParser<PString5> // expected ["", "85", ""]
  type R6 = PercentageParser<PString6> // expected ["", "85", ""]

  type GetPrefix<T extends string> = T extends `${ infer L extends '+' | '-' }${ infer R }` ? L : '';
  type GetSuffix<T extends string> = T extends `${ infer L }%` ? '%' : '';

  type PercentageParser<T extends string> = [
    GetPrefix<T>,
    T extends `${ GetPrefix<T> }${ infer M }${ GetSuffix<T> }` ? M : '',
    GetSuffix<T>,
  ]
}
