// in
function log(obj: { name: string } | { age: number }) {
  // console.log(obj.name); // l
  if ("name" in obj) {
    // kiểm tra key có tồn tại trong obj không
    console.log(obj.name);
  }
  if ("age" in obj) {
    console.log(obj.age);
  }
}

// typeof
const myStudent = {
  id: 1,
  name: "son",
  age: 12,
};

const firstName = "Quang Sơn";

type Student1 = typeof myStudent; // trả ra cái type của obj myStudent
// <=>
// {
//     id: number;
//     name: string;
//     age: number;
// }
type Student2 = typeof firstName; // trả ra cái type của obj myStudent
// type Student2 = "Quang Sơn"

// keyof
type Student3 = keyof typeof myStudent; // trả ra tập hợp các key theo kiểu union của `typeof myStudent` này
// <=>
// "name" | "age" | "id"
