/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
    Include: Intersection types, Type casting, Type assertion
*/
/*---------------- Union type: typeA | typeB-----------------*/
/*---------------- Intersection types `&`: typeA & typeB & typeC-----------------*/
// Trong TypeScript, Intersection type kết hợp nhiều kiểu thành một. Điều này cho phép bạn thêm các kiểu hiện có lại với nhau để có được một kiểu duy nhất có tất cả các tính năng bạn cần.
interface IBusinessPartner {
  name: string;
  credit: number;
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
let evondev: Employee = {
  id: 1,
  name: "evondev",
  email: "evondev@gmail.com",
  phone: "0345505322",
};
type Customer = IBusinessPartner & IContact;
let tai: Customer = {
  name: "evondev",
  credit: 12,
  email: "evondev@gmail.com",
  phone: "0345505322",
};

type Other = IContact | IIdentity;
let other: Other = {
  id: 1,
  email: "son@gmail.com",
  name: "Quang Son",
  phone: "0345505829",
};
console.log(other);

/*---------------- Type casting `as`-----------------*/
// - Nó sẽ convert từ element sang 1 type khác
// - Sử dụng nhiều trong react component và sử dụng những thứ liên quan đến DOM, INPUT, DIV, EVENT
// - Link: components/Cart.tsx

/*---------------- Type assertion `as`-----------------*/

// Type assertions hướng dẫn trình biên dịch coi một giá trị là một kiểu được chỉ định.
// Type assertions không thực hiện bất kỳ kiểu ép kiểu nào.
// Type assertions sử dụng từ khóa as hoặc cú pháp dấu ngoặc nhọn <>.

function getNetPrice(
  price: number,
  discount: number,
  format: boolean
): number | string {
  let netPrice = price * (1 - discount);
  return format ? `$${netPrice}` : netPrice;
}

// Example 1: `as`
let netPrice1 = getNetPrice(100, 0.05, true) as string;
console.log(netPrice1);

// Example 2: <>

let netPrice2 = <number>getNetPrice(100, 0.05, false);
console.log(netPrice2);
