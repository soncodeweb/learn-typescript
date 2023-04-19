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
