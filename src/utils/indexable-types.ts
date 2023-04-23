/*-------------------Indexable types------------------- */
// Cú pháp: `[indexName: Keys]: Values`
type array = {
  length: number;
  [index: string]: number;
};

const newArray: array = {
  length: 12,
  hello: 20,
  tuan: 15,
};
console.log(newArray.length);
