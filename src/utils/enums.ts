/*------------------------ENUM----------------------- */
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Translate: Một enum là một "lớp" đặc biệt đại diện cho một nhóm các hằng số (các biến không thể thay đổi).

// Example 1:
enum Permission1 {
  ADMIN,
  EDITOR,
  MODERATOR,
}
// NOTE:  Khi không gán giá trị cho nó thì giá trị mặc định là index của chúng
console.log(Permission1.ADMIN); // 0

// Example 2:
enum Permission2 {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  MODERATOR = "MODERATOR",
}

console.log(Permission2.ADMIN); // ADMIN
