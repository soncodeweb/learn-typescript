/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import useTodos from "./hooks/useTodos";
const Heading = ({ title }: { title?: string }) => {
  return <h2 className="mb-5 text-2xl font-bold">{title}</h2>;
};

interface Data {
  text: string;
}

const intialState = [
  {
    id: 1,
    text: "Learn TypeScript",
  },
  {
    id: 2,
    text: "Learn Javascript",
  },
  {
    id: 3,
    text: "Learn NodeJs",
  },
  {
    id: 4,
    text: "Learn MongoDB",
  },
];
function App() {
  const { todos, onAddTodo, onRemoveTodo, inputRef } = useTodos(intialState);
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  const items = ["html", "css", "javascript"];
  const onClickItem = (item: string) => {
    alert(item);
  };

  const products = [
    {
      id: 1,
      title: "Iphone 14",
      price: 1500,
      store: "HoangHa",
    },
    {
      id: 2,
      title: "Iphone 11",
      price: 1100,
      store: "CellPhone",
    },
  ];
  return (
    <div className="App">
      <Heading title={"Todo App"}></Heading>
      <List items={items} onClickItem={onClickItem}></List>
      <Boxed>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia alias
        architecto quidem eligendi quis dolore numquam sint aliquid molestiae,
        illum earum fugit iure laudantium labore nemo culpa in, nobis aperiam.
      </Boxed>
      <RenderList
        items={todos}
        render={(item) => (
          <div className="flex items-center mb-2 gap-x-3" key={item.text}>
            <span className="w-[250px]">{item.text}</span>
            <button
              onClick={() => onRemoveTodo(item.id)}
              className="p-2 text-sm font-medium text-white bg-red-500 rounded-lg "
            >
              Remove
            </button>
          </div>
        )}
      ></RenderList>
      <RenderList
        items={products}
        render={(item) => (
          <div className="flex items-center mb-2 gap-x-3" key={item.id}>
            <span className="w-[250px]">{item.title}</span>
            <button
              onClick={() => onRemoveTodo(item.id)}
              className="p-2 text-sm font-medium text-white bg-red-500 rounded-lg "
            >
              Remove
            </button>
          </div>
        )}
      ></RenderList>
      <div className="max-w-sm">
        <div className="flex items-center gap-x-5">
          <input
            type="text"
            name=""
            id=""
            className="p-2 border rounded-lg outline-none border-slate-200 w-[250px]"
            ref={inputRef}
          />
          <button
            className="p-2 text-center text-white bg-blue-500 rounded-lg"
            onClick={() => onAddTodo()}
          >
            Add todo
          </button>
        </div>
      </div>
    </div>
  );
}

const List = ({
  items,
  onClickItem,
}: {
  items: string[];
  onClickItem?: (item: string) => void;
}) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item} onClick={() => onClickItem?.(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};

const Boxed = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const RenderList = <T,>({
  items,
  render,
}: {
  items: T[];
  render: (item: T) => React.ReactNode;
}) => {
  return (
    <>
      <div className="mb-5">{items.map((item) => render(item))}</div>
    </>
  );
};
export default App;
