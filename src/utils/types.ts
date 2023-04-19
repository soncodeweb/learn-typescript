export type Age = 18 | 30 | "40";

// Union type |: typeA | typeB
// Intersection types &: typeA & typeB
interface IBusinessPartner {
  name: string;
  credit: string;
}

interface IIdentity {
  id: number;
  name: string;
}

interface IContact {
  email: string;
  phone: string;
}

type Employee = IIdentity & IContact;
type Customer = IBusinessPartner & IContact;

let quangson: Employee = {
  id: 1,
  email: "quangson@gmail.com",
  name: "Quang Sơn",
  phone: "0345505050",
};

let vu: Customer = {
  credit: "credit",
  email: "quangson@gmail.com",
  name: "Quang Sơn",
  phone: "0345505050",
};

type Other = IContact | IIdentity;
let other: Other = {
  phone: "0345505125",
  email: "tuan@gmail.com",
};
// Type casting as: nó sẽ convert từ element sang 1 type khác
//      - Sử dụng nhiều trong react component và sử dụng những thứ liên quan đến DOM, INPUT, DIV, EVENT
// Type assertion as: xem giá trị nào đó như type mà mình muốn
