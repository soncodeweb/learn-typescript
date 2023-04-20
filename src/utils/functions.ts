// function total(a: number, b: number) {
//   return a + b;
// }

// function total(a: string, b: string) {
//   return a + b;
// }
// total(5, 10); // 15
// total("Lê", "Quang Sơn"); // Lê Quang Sơn

// Trong JS thì không thể định nghĩa 2 hàm cùng tên như trên
// Trong TS có thể làm được việc đó (TS gọi đó là Function Overloading)

// FUNCTION OVERLOADING: function have the same name, same amount of different amount of parameters, different type and same or different return type

// Ex1:
function total(a: number, b: number): number;
function total(a: string, b: string): string;
function total(a: any, b: any) {
  return a + b;
}

// Ex2:

interface Coordinate {
  x: number;
  y: number;
}

// {x: number, y: number}: Coordinate
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: any, arg2?: any): Coordinate {
  let coord;
  if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coord;
}

// Type assertion `as`: Ép kiểu

// - Normal function
function addNumbers(a: number, b: number): number {
  return a + b;
}
// - Arrow function
const addStrings = (x: string, y: string): string => {
  return `${x} ${y}`;
};
// Default parameters
function addNumbersWithDefaultParams(a: number = 10, b: number = 20): number {
  return a + b;
}
addNumbersWithDefaultParams(); // 30
// Union types
function format(title: string, desc: string, amount: string | number) {
  return `${title} ${desc} ${amount}`;
}
format("Title", "desc", 10);
format("Title", "desc", "10");

// Void function
function contact(email: string, phone: number): void {
  console.log(email, phone);
}
// Promise functions
const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Get data from ${url}`);
// Rest parameters
function information(id: number, ...names: string[]): string {
  return `${id} ${names.join(" ")}`;
}
information(1, "Quang Son", "Quang Hai");
// With callback
function handleFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}
// Function params with params
// function handleUpdateArray(
//   numbers: number[],
//   update: (n: number) => number
// ): number[] {
//   return numbers.map((item) => update(item));
// }
// handleUpdateArray([1, 2, 3, 5], (n) => n * 5); // 5 10 15 20
// Function as types
type UpdateArray = (n: number) => number;
function handleUpdateArray(numbers: number[], update: UpdateArray): number[] {
  return numbers.map((item) => update(item));
}
handleUpdateArray([1, 2, 3, 5], (n) => n * 5); // 5 10 15 20
// Function return function
function handleValue(val: number): (n: number) => number {
  return (n: number) => n * val;
}
const value = handleValue(5);
console.log(value(10));
