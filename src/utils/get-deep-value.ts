function getDeepValue<T, K extends keyof T, SK extends keyof T[K]>(
  obj: T,
  firstKey: K,
  secondKey: SK
) {
  return obj[firstKey][secondKey];
}

const obj = {
  foo: {
    a: true,
    b: 20,
  },
  baz: {
    c: false,
    d: 30,
  },
};

console.log(getDeepValue(obj, "baz", "c"));

// log(obj, 'foo', 'a') => true
