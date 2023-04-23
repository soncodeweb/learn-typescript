// import { FinalProduct, Product, ProductNewFeature } from "./interface";

/* eslint-disable @typescript-eslint/no-unused-vars */
// function total(a: number, b: number): number {
//   return a + b;
// }
// total(5, 3);
// // Type assignment
// // const variable: dataTypes = value
// const age: number = 20;
// const name: string = "Quang Son";
// // const isStudent: boolean = false;
// const school = "Giao Thông Vận Tải";
/**
  # Tuple
  string[] -> ['javascript', 'react', 'nodeJs']
  Cú pháp: [number, string]
  Đúng: [1, 'Quang Son']
  Sai: ['Le', 'Quang Son']
 */

/**
  # Enum: Là tập hơp các const
  Cú pháp: 
    enum Permission {
      ADMIN = 'ADMIN',
      EDITOR = 'EDITOR',
      MODERATOR = 'MODERATOR',
    }
 */

// Any
/**
  # Union
    Cú pháp: string | number
 */

/**
  # Literal: giá trị chỉ được 1 trong 3 số(kiểu tùy ý) đó
  * Cú pháp: type age = 18 | 30 | "40"
 */

/**
  # Function: 
  * Cú pháp: 
    function total(a: number, b: number): number {
      return a + b;
    }
 */

/**
  # Void: 
  * Cú pháp: 
    function total(a: number, b: number): void {
      // Khi không return về cái gì thì dùng void
    }
 */

/**
  # unknown: 
  * Cú pháp: 
    let aNumber: unknown;
    aNumber = 100; 
    aNumber.toFixed(2) // 'aNumber' is of type 'unknown'
    Phải kiểm tra kiểu mới sử dụng được
    if (typeof aNumber === "number") aNumber.toFixed(2);
 */

/**
  # never: 
    + Không chứa dữ liệu
    + Đại diện cho 1 func trả ra 1 cái lỗi nào đó
  * Cú pháp: 
  * Ví dụ: 
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
 */

// const product: FinalProduct = {
//   name: "car",
//   brand: "bmw",
//   color: "red",
// };

// function addProduct(product: FinalProduct) {}

// addProduct(product);
// export { total };
