/* eslint-disable @typescript-eslint/no-unused-vars */
function simpleUseState<T>(val: T): [() => T, (v: T) => void] {
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [strGetter, strSetter] = simpleUseState("Quang Sơn");
console.log(strGetter()); // Quang Sơn
strSetter("Văn Toàn");
console.log(strGetter()); // Văn Toàn

const [strGetter2, strSetter2] = simpleUseState(2);
const [strGetter3, strSetter3] = simpleUseState(100);

interface Rank<R> {
  item: R;
  rank: number;
}
function ranker<R>(items: R[], rank: (v: R) => number): R[] {
  const ranks: Rank<R>[] = items.map((item) => ({
    item: item,
    rank: rank(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}

const languages: {
  name: string;
  dificulty: number;
}[] = [
  {
    name: "ReactJs",
    dificulty: 60,
  },
  {
    name: "NodeJs",
    dificulty: 80,
  },
  {
    name: "Vue",
    dificulty: 70,
  },
];
// console.log(ranker([1, 2, 4, 5, 6], (number) => number * 5));

console.log(ranker(languages, ({ dificulty }) => dificulty));
