# Primitive types

- typeof // Kiểm tra loại kiểu dữ liệu
- Type Assignment
  `const variable: dataTypes = value`
- Number Types
  `const age:number = 12`
- String Types
  `const name:string = 'son'`
  or
  `const name = 'son'`
- Boolean Types
  `const name:boolean = false`

_Note:_ - optional: không bắt buộc

```php
    name?: parameter này không bắt buộc
```

# Structural types

- Object
  `const object: {} = {}`
  `const object: {}[] = [{}]`: một mảng các obj

  ```php
    const user: { firstName: string; lastName: string; age: number; isStudent: boolean; } =
    {
        firstName: "Le",
        lastName: "Quang Son",
        age: 22,
        isStudent: ['Cao Thang', 'GTVT'],
    };
  ```

  `number[]`: mảng các số
  `string[]`: mảng các chuỗi

- Array
- Tuple
- Enum
- Any
- Union
- Literal
- Function

# INTERFACE

Chúng ta sử dụng Interface để định nghĩa một cấu trúc mà bất cứ Class nào khi sử dụng nó đều phải tuân thủ các biến và phương thức có trong interface
Cú pháp:

```php
    export interface Product {
        name: string;
        brand: string;
        color: string;
    }
```

# FUNCTION OVERLOADING

- Trong JS thì không thể định nghĩa 2 hàm cùng tên như trên
- Trong TS có thể làm được việc đó (TS gọi đó là Function Overloading)
- function overloading: function have the same name, same amount of different amount of parameters, different type and same or different return type
  Cú pháp

```php
    function total(a: number, b: number): number;
    function total(a: string, b: string): string;
    function total(a: any, b: any) {
    return a + b;
}
```

# TYPE

// Union type |: typeA | typeB
// Intersection types &: typeA & typeB

```php

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

    // Intersection types
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

    // Union type
    type Other = IContact | IIdentity;
    let other: Other = {
    phone: "0345505125",
    email: "tuan@gmail.com",
    };
```

// Type casting as: nó sẽ convert từ element sang 1 type khác
// - Sử dụng nhiều trong react component và sử dụng những thứ liên quan đến DOM, INPUT, DIV, EVENT
// Type assertion as: xem giá trị nào đó như type mà mình muốn
