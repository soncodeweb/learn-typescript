/* eslint-disable @typescript-eslint/no-unused-vars */
/* ---------------------------OBJECT TYPES-------------------------------- */
// The TypeScript object type represents all values that are not in primitive types.

// Example :
type employee = {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

const employee1: employee = {
  firstName: "Quang Son",
  lastName: "Lê",
  age: 20,
  jobTitle: "student",
};
