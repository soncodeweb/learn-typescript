/* eslint-disable @typescript-eslint/no-unused-vars */
// interface Todo {
//   title: string;
//   description: string;
//   date: string;
// }
// 1. Partial<Type>
// type NewTodo = Partial<Todo>;
// function updateTodo(todo: Todo, newTodo: NewTodo) {
//   return {
//     ...todo,
//     ...newTodo,
//   };
// }
// console.log(
//   updateTodo(
//     {
//       title: "Todo",
//       description: "Desc",
//       date: "2021",
//     },
//     {}
//   )
// );

//
// interface Props {
//   isActive?: boolean;
//   color?: string;
// }

// const compA: Props = {};

// 2. Required<Type>
// type compB = Required<Props>; //

// 3. Readonly<Type>
// interface Todo {
//   title: string;
// }

// const todo: Readonly<Todo> = {
//   title: "Hello World!",
// };
// todo.title = 'Name'; // Cannot assign to 'title' because it is a read-only property

// 4. Record<Keys, Type>
// interface CatInfo {
//   age: number;
//   breed: string;
// }

// type CatName = "miffy" | "boris" | "mordred";

// const cats: Record<CatName, CatInfo> = {
//   miffy: { age: 10, breed: "Persian" },
//   boris: { age: 5, breed: "Maine Coon" },
//   mordred: { age: 16, breed: "British Shorthair" },
// };

// console.log(cats.boris);

// 5. Pick<Type, Keys>
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Pick<Todo, "completed" | "title">;

// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
//   // description: "Desc",
// };

// 6. Omit<Type, Keys>
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Omit<Todo, "completed" | "title">;
// const todo: TodoPreview = {
//   description: "Mô tả",
// //   completed: "True",
// };

// 7. Exclude<UnionType, ExcludedMembers>
// type T0 = Exclude<"a" | "b" | "c", "a">;
// <=>
// type T0 = "b" | "c"

// 8. Extract<Type, Union>

//   type T0 = Exclude<"a" | "b" | "c", "a">;
// <=>
// type T0 = "b" | "c"
//   type T1 = Extract<string | number | (() => void), Function>;
// <=>
//   <!-- type T1 = () => void -->

// 9. NonNullable<Type>

//   type T0 = NonNullable<string | number | undefined>;
// <=>
// type T0 = string | number
//   type T1 = NonNullable<string[] | null | undefined>;
// <=>
// type T1 = string[]
