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

// type Student = typeof myStudent; // trả ra cái type của obj myStudent
// <=>
// {
//     id: number;
//     name: string;
//     age: number;
// }

// keyof
type Student = keyof typeof myStudent; // trả ra cái type của obj myStudent
// <=>
// "name" | "age" | "id"
