/* eslint-disable @typescript-eslint/no-unused-vars */
/* ---------------------------UNION TYPES-------------------------------- */
// Union types are used when a value can be more than a single type.
// Translate: Các loại liên kết được sử dụng khi một giá trị có thể nhiều hơn một loại.
// Chẳng hạn như khi một thuộc tính sẽ là chuỗi hoặc số.

// Example 1:
type union = string | number;
const str: union = "Hello World";
const num: union = 20;
