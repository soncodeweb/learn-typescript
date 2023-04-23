/*-------------------------MAPPED TYPED----------------------- */
// When you don’t want to repeat yourself, sometimes a type needs to be based on another type.
// Translate: Khi bạn không muốn lặp lại chính mình, đôi khi một type cần dựa trên một type khác.
// Mapped types build on the syntax for index signatures, which are used to declare the types of properties which have not been declared ahead of time
// Translate: Mapped types được xây dựng dựa trên cú pháp cho index signatures, được sử dụng để khai báo các loại thuộc tính chưa được khai báo trước

// Example 1:
// type Developer = {
//   name: string;
// } & Record<string, any>;

type Developer = {
  name: string;
  [key: string]: number | string; // Có thêm nhiều key mình muốn
};

const soncodeweb: Developer = {
  name: "Quang Son",
  age: 20,
  gender: "male",
};
