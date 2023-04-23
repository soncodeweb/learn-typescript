/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import useTodos from "./hooks/useTodos";
const Heading = ({ title }: { title?: string }) => {
  return <h2 className="mb-5 text-2xl font-bold">{title}</h2>;
};
type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };
type Todo = {
  id: number;
  text: string;
};
const todoReducer = (state: Todo[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
        },
      ];
    case "REMOVE":
      return state.filter((todo: Todo) => todo.id !== action.id);
    default:
      throw new Error("");
  }
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
  return (
    <div className="App">
      <Heading title={"Todo App"}></Heading>
      <List items={items} onClickItem={onClickItem}></List>
      <Boxed>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia alias
        architecto quidem eligendi quis dolore numquam sint aliquid molestiae,
        illum earum fugit iure laudantium labore nemo culpa in, nobis aperiam.
      </Boxed>
      <div className="max-w-sm">
        <div className="mb-5">
          {todos.map((todo) => (
            <div className="flex items-center mb-2 gap-x-3" key={todo.text}>
              <span className="w-[250px]">{todo.text}</span>
              <button
                onClick={() => onRemoveTodo(todo.id)}
                className="p-2 text-sm font-medium text-white bg-red-500 rounded-lg "
              >
                Remove
              </button>
            </div>
          ))}
        </div>
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
export default App;
