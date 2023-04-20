function getDevicesKeys<A, B extends keyof A>(items: A[], key: B): A[B][] {
  return items.map((item) => item[key]);
}

const devices = [
  {
    name: "iPhone",
    price: 1000,
  },
  {
    name: "iPad",
    price: 1000,
  },
  {
    name: "MackBook",
    price: 1000,
  },
];

console.log(getDevicesKeys(devices, "name")); // ['iPhone', 'iPad', 'MacBook']
console.log(getDevicesKeys(devices, "price")); // [ 1000, 1000, 1000 ]
