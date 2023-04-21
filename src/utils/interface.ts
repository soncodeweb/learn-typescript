/* eslint-disable @typescript-eslint/no-unused-vars */
/*
  Type Alias: A type alias is exactly that - a name of any type // A type alias chính xác là như vậy - tên cho bất kỳ loại nào
  Interface: A way to name an object // Là một cách khác để đặt tên cho một loại đối tượng
*/

/*---------------------TYPE ALIAS-------------------- */
// Primitive type
// Trường hợp dưới đây, chỉ đơn giản là mình tạo ra một cái tên gọi khác cho kiểu primitive.
// Cái này thì ít hữu dụng, vì cơ bản mình có thể dùng trực tiếp primitive type luôn cho khoẻ.
// Example:
type AuthorName = string;
type AuthorAge = number;
type IsTopAuthor = boolean;

// Object type
// Add question mark ? for optional props // Thêm dấu chấm hỏi `?` cho các đạo cụ tùy chọn
// Add readonly to not allow updating value of a props (NOTE: still able to set on creation) // Thêm chỉ đọc để không cho phép cập nhật giá trị của props (LƯU Ý: vẫn có thể thiết lập khi tạo)

type Author = {
  readonly id: number; // chỉ được gán lúc tạo, không được update
  name: string;
  age?: number; // optional // Khi tạo 1 object với type Author thì `age` có thể có hoặc không có đều được
};

const authorA: Author = {
  id: 1, // chỉ được gán lúc tạo, không được update // lúc này set được vì đang là lúc tạo
  name: "Hồ Xuân Hương",
};

/*---------------------INTERFACE-------------------- */
/*---------------------Type Alias và Interface-------------------- */
/*
* Interface
  - Able to add new props to Interface, but not Type Alias // Có thể thêm các props mới vào Giao diện, nhưng type Alias thì không
  - Declaration merging // Khai báo sẽ hợp nhất lại với nhau
  - Dễ dàng mở rộng
  - Extend và implements
    + Trong TypeScript, chúng ta dễ dàng extends và implements interfaces. Nhưng không thể với types Với interface để kế thừa chúng ta sử dụng extends
  - Indexable types
    + Cần tìm hiểu thêm
* Type Alias
  - Không thể khởi tạo thêm lần nữa
  - Type aliases có thể sử dụng computed properties
    + Từ khóa in có thể được sử dụng để iterate tất cả các item bên trong một tập hợp keys. Chúng ta có thể sử dụng tính năng này để tạo mapped types.
  * Cả hai
    - Intersection cho phép chúng ta kết hợp nhiều types và interface thành một types và interface duy nhất. Để tạo một intersection types và interface chúng ta dùng &:
    - Cách đặt tên type vs interface
      + Use PascalCase instead of camelCase. Use Student instead of student
      + Don't use prefix I. Use Student instead of IStudent
  * Nên dùng Interface hay Type

*/
interface Singer {
  id: number;
  name: string;
}

interface Singer {
  age?: number;
}

const singerA: Singer = {
  id: 1,
  name: "Thuy Chi",
  age: 27,
};

// Indexable Types
