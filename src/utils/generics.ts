/* eslint-disable @typescript-eslint/no-unused-vars */

/*---------------------------GENERICS------------------------*/
// Kiểu dữ liệu mà có nhận tham số và trả về kiểu dữ liệu tương ứng.
// Generics cho phép tạo 'biến loại' có thể được sử dụng để tạo lớp, hàm & loại bí danh mà không cần xác định rõ ràng loại mà chúng sử dụng.

// Generics giúp viết mã có thể tái sử dụng dễ dàng hơn.
// Khi nào chúng ta sử dụng generics: Khi chúng ta sử dụng 1 func hay kiểu nào đó mà sử dụng cái type đa dạng

// Example 1:
function simpleUseState<T>(val: T): [() => T, (v: T) => void] {
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [strGetter, strSetter] = simpleUseState("evondev");
const [strGetter2, strSetter2] = simpleUseState(230);
const [strGetter3, strSetter3] = simpleUseState(true);

// Example 2:

interface rank<RankItem> {
  item: RankItem;
  rank: number;
}
function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: rank<RankItem>[] = items.map((item) => ({
    item: item,
    rank: rank(item),
  }));
  return ranks.map((rank) => rank.item);
}

ranker([1, 2, 3, 4, 5], (v) => v * 5);
// [1,2,3,4,5] (v) => v
