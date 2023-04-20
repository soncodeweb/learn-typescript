# Primitive types

1. typeof // Kiểm tra loại kiểu dữ liệu
2. Type Assignment
   `const variable: dataTypes = value`
3. Number Types
   `const age:number = 12`
4. String Types
   `const name:string = 'son'`
   or
   `const name = 'son'`
5. Boolean Types
   `const name:boolean = false`

_Note:_ - optional: không bắt buộc

```php
    name?: parameter này không bắt buộc
```

# Structural types

1. Object
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
  ```php
    string[] -> ['javascript', 'react', 'nodeJs']
    Cú pháp: [number, string]
    Đúng: [1, 'Quang Son']
    Sai: ['Le', 'Quang Son']
  ```
- Enum: Là tập hơp các const
  ```php
  Cú pháp:
    enum Permission {
      ADMIN = 'ADMIN',
      EDITOR = 'EDITOR',
      MODERATOR = 'MODERATOR',
    }
  ```
- Any
- Union
  ```php
  Cú pháp: string | number
  ```
- Literal: giá trị chỉ được 1 trong 3 số(kiểu tùy ý) đó
  ```php
  Cú pháp: type age = 18 | 30 | "40"
  ```
- unknown:
  ```php
    * Cú pháp:
      let aNumber: unknown;
      aNumber = 100;
      aNumber.toFixed(2) // 'aNumber' is of type 'unknown'
      Phải kiểm tra kiểu mới sử dụng được
      if (typeof aNumber === "number") aNumber.toFixed(2);
  ```
- never:

  - Không chứa dữ liệu
  - Đại diện cho 1 func trả ra 1 cái lỗi nào đó

  * Cú pháp:
  * Ví dụ:

  ```php
    * func bắn ra lỗi
    function raiseError(error: string): never {
      throw new Error(error);
    }

    function reject() {
      return raiseError("error");
    }
    * func không dừng lại
    let loop = function forever() {
      while (true) {
        console.log("Hello World");
      }
    };
  ```

- Function

  1.  Normal function

  ```php
  function addNumbers(a: number, b: number): number {
    return a + b;
  }
  ```

  2. Arrow function

  ```php
  const addStrings = (x: string, y: string): string => {
    return `${x} ${y}`;
  };
  ```

  3. Default parameters

  ```php
  function addNumbersWithDefaultParams(a: number = 10, b: number = 20): number {
    return a + b;
  }
  addNumbersWithDefaultParams(); // 30
  ```

  4. Union types

  ```php
  function format(title: string, desc: string, amount: string | number) {
    return `${title} ${desc} ${amount}`;
  }
  format("Title", "desc", 10);
  format("Title", "desc", "10");
  ```

  5. Void function

  ```php
  function contact(email: string, phone: number): void {
    console.log(email, phone);
  }
  ```

  6. Promise functions

  ````php
  const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Get data from ${url}`);
  ```
  ````

7.  Rest parameters

```php
function information(id: number, ...names: string[]): string {
  return `${id} ${names.join(" ")}`;
}
  information(1, "Quang Son", "Quang Hai");
```

8. With callback

```php
function handleFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}
```

9. Function params with params

```php
function handleUpdateArray(
  numbers: number[],
  update: (n: number) => number
  ): number[] {
  return numbers.map((item) => update(item));
  }
  handleUpdateArray([1, 2, 3, 5], (n) => n \_ 5); // 5 10 15 20
```

10. Function as types

```php
  type UpdateArray = (n: number) => number;
  function handleUpdateArray(numbers: number[], update: UpdateArray): number[] {
  return numbers.map((item) => update(item));
  }
  handleUpdateArray([1, 2, 3, 5], (n) => n \_ 5); // 5 10 15 20
```

11. Function return function

```php
  function handleValue(val: number): (n: number) => number {
  return (n: number) => n \* val;
  }
  const value = handleValue(5);
  console.log(value(10));
```

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
