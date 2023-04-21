/* eslint-disable @typescript-eslint/no-unused-vars */
/*------------------------LITERAL TYPES----------------------- */
// The string literal types allow you to define a type that accepts only one specified string literal.
// Translate: Các kiểu ký tự chuỗi cho phép bạn xác định một loại chỉ chấp nhận một ký tự chuỗi được chỉ định.

type literal = 18 | 30 | "40";

// Giá trị chỉ nhận những thứ xác định bên trên
const age: literal = 18;
