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
    // [number, number] -> [100,100]
    type ThreeDCoordinate = [x: number, y: number, z: number];
    function add3DCoordinate(
      a: ThreeDCoordinate,
      b: ThreeDCoordinate
    ): ThreeDCoordinate {
      return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
    }
    add3DCoordinate([1, 100, 200], [200, 300, 400]);
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

  - Union type |: typeA | typeB
  - Intersection types &: typeA & typeB

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

- Type casting as: nó sẽ convert từ element sang 1 type khác
  - Sử dụng nhiều trong react component và sử dụng những thứ liên quan đến DOM, INPUT, DIV, EVENT
- Type assertion as: xem giá trị nào đó như type mà mình muốn

- Function

  1.  Normal function

  ```php
  function addNumbers(a: number, b: number): number {
    return a + b;
  }
  ```

`````

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

# Generic types

Đối với Typescript , Generics được định nghĩa như là một công cụ cho phép bạn tạo ra các đoạn code để có thể sử dụng lại với nhiều type khác nhau một cách linh hoạt thay vì duy nhất một type . Đồng thời nó giúp bạn tránh trùng lặp các đoạn code có chức năng tương tự mà vẫn thể hiện rõ mục đích sử dụng

```php
  Cú pháp:
  function simpleUseState<T>(val: T): [() => T, (v: T) => void] {
  return [
        () => val,
        (v: T) => {
        val = v;
      },
    ];
  }
```

1. keyof
   Trả về những key của một mảng hoặc obj chúng ta muốn sử dụng thường nó sẽ là obj hoặc là những giá trị mà chúng ta muốn truyền vào component nào đó hoặc một chức năng nào đó chúng ta viết
   Lấy toàn bộ key của type đó

# Utility types

1. Partial<Type>
   Đây là một utility type cho phép bạn tạo nhanh một type với các thuộc tính optional hoặc undefined từ một type sẵn có

   ```php
    interface Todo {
    title: string;
    description: string;
    date: string;
    }
    type NewTodo = Partial<Todo>;
     <=>
    type NewTodo =  {
      title?: string | undefined;
      description?: string | undefined;
      date?: string | undefined;
    }
   ```

2. Required<Type>

   Xây dựng một loại bao gồm tất cả các thuộc tính được Typeđặt thành bắt buộc. Ngược lại với Partial.

   ```php
       interface Props {
       isActive?: boolean;
       color?: string;
     }
     type compB: Required<Props> = {}; // Type '{}' is missing the following properties from type 'Required<Props>': isActive, color
     <=>
     type compB = {
       isActive: boolean;
       color: string;
     }
   ```

3. Readonly<Type>
   Xây dựng một loại với tất cả các thuộc tính được Typeđặt thành readonly, nghĩa là không thể chỉ định lại các thuộc tính của loại đã xây dựng.

   ```php
     interface Todo {
       title: string;
     }

     const todo: Readonly<Todo> = {
       title: "Hello World!",
     };
     todo.title = 'Name'; // Cannot assign to 'title' because it is a read-only property
   ```

4. Record<Keys, Type>
   Xây dựng một loại đối tượng có khóa thuộc tính Keys và có giá trị thuộc tính là Type. Tiện ích này có thể được sử dụng để ánh xạ các thuộc tính của một loại sang một loại khác.
   ```php
    interface CatInfo {
      age: number;
      breed: string;
    }
    type CatName = "miffy" | "boris" | "mordred";
    const cats: Record<CatName, CatInfo> = {
      miffy: { age: 10, breed: "Persian" },
      boris: { age: 5, breed: "Maine Coon" },
      mordred: { age: 16, breed: "British Shorthair" },
    };
    console.log(cats.boris); // { age: 5, breed: 'Maine Coon' }
   ```
5. Pick<Type, Keys>
   Xây dựng một loại bằng cách chọn tập hợp các thuộc tính Keys(chuỗi ký tự hoặc liên kết của chuỗi ký tự) từ tệp Type.

```php
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = Pick<Todo, "completed" | "title">;

  const todo: TodoPreview = {
     title: "Clean room",
    completed: false,
    description: "Desc", // Type '{ title: string; completed: false; description: string; }' is not assignable to type 'TodoPreview'.
  // Object literal may only specify known properties, and 'description' does not exist in type
  };
```

6. Omit<Type, Keys>
   Xây dựng một loại bằng cách chọn tất cả các thuộc tính từ đó Type và sau đó loại bỏ Keys(chuỗi ký tự hoặc liên kết của chuỗi ký tự).

```php
  interface Todo {
  title: string;
  description: string;
  completed: boolean;
  }

  type TodoPreview = Omit<Todo, "completed" | "title">;
  const todo: TodoPreview = {
    description: "Mô tả",
    completed: "True", // Type '{ description: string; completed: string; }' is not assignable to type 'TodoPreview'.
   // Object literal may only specify known properties, and 'completed' does not exist in type 'TodoPreview'.
  };
```

7. Exclude<UnionType, ExcludedMembers>

```php
  type T0 = Exclude<"a" | "b" | "c", "a">;
  // <=>
  // type T0 = "b" | "c"
```

8. Extract<Type, Union>

```php
  type T0 = Exclude<"a" | "b" | "c", "a">;
  // <=>
  // type T0 = "b" | "c"
  type T1 = Extract<string | number | (() => void), Function>;
  // <=>
  <!-- type T1 = () => void -->
```

9. NonNullable<Type>
   Xây dựng một type bằng cách loại trừ null và không xác định khỏi Type

```php
  type T0 = NonNullable<string | number | undefined>;
  // <=>
  // type T0 = string | number
  type T1 = NonNullable<string[] | null | undefined>;
  // <=>
  // type T1 = string[]
```

# Mapped types

Có nghĩa là một variable có thể sử dụng type của type hoặc interface khác cho chính bản thân nó.
File: utils/mapped-types.ts

# Conditional types

File: utils/conditional-types.ts

# in, keyof, typeof

File: utils/other.ts
`````
