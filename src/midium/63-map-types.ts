{
  // Implement MapTypes<T, R> which will transform types in object T to different types defined by type R which has the following structure

  type StringToNumber = {
    mapFrom: string; // value of key which value is string
    mapTo: number; // will be transformed for number
  }
  type StringToDate = { mapFrom: string; mapTo: Date; }

  type a = MapTypes<{ iWillBeANumberOneDay: string }, StringToNumber> // gives { iWillBeANumberOneDay: number; }

  type c = MapTypes<{ iWillBeNumberOrDate: string }, StringToDate | StringToNumber> // gives { iWillBeNumberOrDate: number | Date; }

  type b = MapTypes<{ iWillBeANumberOneDay: string, iWillStayTheSame: Function }, StringToNumber> // {iWillBeANumberOneDay: number, iWillStayTheSame: Function }

  type d = MapTypes<{ name: string; date: Date }, { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }> // { name: boolean; date: string }>

  type MapTypes<T extends Record<string, unknown>, Mapper extends { mapFrom: unknown, mapTo: unknown }> = {
    [K in keyof T]: T extends Mapper['mapFrom'] ? Extract<Mapper, { mapFrom: T[K] }>['mapTo'] : T[K]
  }
}
