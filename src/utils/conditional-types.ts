// Ternary operator
// condition ? true : condition2 ? true : condition3 ? true : false
// someType extends otherType ? trueType : falseType

import { type } from "os";

type someType<T> = T extends string
  ? string
  : T extends boolean
  ? boolean
  : T extends number
  ? number
  : any;

type someValue = someType<boolean>; // boolean
type someValue2 = someType<string>; // string
type someValue3 = someType<number>; // number

type MyExclude<T, U> = T extends U ? never : T;
// never: never occurs
type TExclude = Exclude<"a" | "b" | "c", "a">;
// union type: T "a" | "b" | "c"
// U "a"
// "a" extends "a" ? never : "a" => never
// "b" extends "a" ? never : "b" => "b"
// "c" extends "a" ? never : "c" => "c"
// result: "b" | "c"
type MyExtract<T, U> = T extends U ? T : never;
type TExtract = MyExtract<"a" | "b" | "c", "a" | "c">;
// "a" extends "a" ? never : "a" => "a"
// "b" extends "a" ? never : "b" => never
// "c" extends "a" ? never : "c" => never
// result: "a" | "c"

// Infer
// type MyInfer<T> = T extends string ? string : any;
// type MyInfer2<T> = T extends number ? string : any;
// !==
type MyInfer<T> = T extends infer R ? R : any;

type UserMyInfer = MyInfer<string>;
