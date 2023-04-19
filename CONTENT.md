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
