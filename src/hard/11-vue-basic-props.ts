{
  // This challenge continues from 6 - Simple Vue, you should finish that one first, and modify your code based on it to start this challenge.

  // In addition to the Simple Vue, we are now having a new props field in the options. This is a simplified version of Vue's props option. Here are some of the rules.

  // props is an object containing each field as the key of the real props injected into this. The injected props will be accessible in all the context including data, computed, and methods.

  // A prop will be defined either by a constructor or an object with a type field containing constructor(s).

  // For example

  // props: {
  //   foo: Boolean
  // }
// or
//   props: {
//     foo: { type: Boolean }
//   }
//   should be inferred to type Props = { foo: boolean }.

  // When passing multiple constructors, the type should be inferred to a union.

  // props: {
  // foo: { type: [Boolean, Number, String] }
// }
// -->
//   type Props = { foo: boolean | number | string }
  // When an empty object is passed, the key should be inferred to any.

  // For more specified cases, check out the Test Cases section.

  // required, default, and array props in Vue are not considered in this challenge.
  class ClassA {}

  const instance = SimpleVue({
    props: {
      propA: {},
      propB: { type: String },
      propC: { type: Boolean },
      propD: { type: ClassA },
      propE: { type: [String, Number] },
      propF: RegExp,
    },
    data() {
      // @ts-expect-error
      this.firstname;
      // @ts-expect-error
      this.getRandom();
      // @ts-expect-error
      this.data();

      return {
        firstname: 'Type',
        lastname: 'Challenges',
        amount: 10,
      };
    },
    computed: {
      fullname() {
        return `${ this.firstname } ${ this.lastname }`;
      },
    },
    methods: {
      getRandom() {
        return Math.random();
      },
      hi() {
        alert(this.amount);
        alert(this.fullname.toLowerCase());
        alert(this.getRandom());
      }
    },
  });

  function SimpleVue<Props, Data, Computed, Methods>(options: SimpleVueType<Props, Data, Computed, Methods>) {
    return options;
  }

  type ComputedType<C> = {
    [K in keyof C]: C[K] extends (...args: any[]) => infer Return ? Return : never
  }

  type PropConstructor<T> = { new(...args: any[]): T & {} } | { (): T };

  type PropType<T> = PropConstructor<T> | PropConstructor<T>[];

  type Prop<T> = PropType<T> | { type?: PropType<T> }

  type InferProp<T> = T extends Prop<infer P> ? unknown extends P ? any : T : any

  type PropsType<P> = {
    readonly [K in keyof P]: InferProp<P[K]>
  }

  type SimpleVueType<Props, Data, Computed, Methods> =
    {
      props?: Props
      data?(this: PropsType<Props>): Data,
      computed?: Computed
      methods?: Methods
    }
    & ThisType<PropsType<Props> & Data & Methods & ComputedType<Computed>>
}
