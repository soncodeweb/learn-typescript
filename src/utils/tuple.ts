/* eslint-disable @typescript-eslint/no-unused-vars */
/* ---------------------------TUPLE-------------------------------- */
// A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
// Translate: Loại tuple là một loại khác của loại Array biết chính xác nó chứa bao nhiêu phần tử và chính xác loại nó chứa ở các vị trí cụ thể.

// Example 1:
type user = [number, string, string, boolean];
const user1: user = [1, "Quang Sơn", "GTVT", true];

// Example 2:
type tuple = [number, string];
const valTuple: tuple = [100, "Hello"];
