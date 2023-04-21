function deepEqualCompare<T>(
  a: T extends any[] ? "Dont pass an array here" : T,
  b: T extends any[] ? "Dont pass an array here" : T
): boolean {
  return a === b;
}

// Dont pass an array here
deepEqualCompare(true, true);
deepEqualCompare("quangson", "quangson");
// deepEqualCompare([1, 2], [1, 2]); // Argument of type 'number[]' is not assignable to parameter of type '"Dont pass an array here"'
