/* eslint-disable @typescript-eslint/no-unused-vars */
import { useReducer, useRef, useState } from "react";
import "./App.css";
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
const intialState: Todo[] = [
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
  const [todos, dispatch] = useReducer(todoReducer, intialState);
  const inputRef = useRef<HTMLInputElement>(null);
  const onRemoveToDo = (todoId: number) => {
    dispatch({ type: "REMOVE", id: todoId });
  };
  console.log("render");

  const handleAddTodo = () => {
    if (inputRef.current?.value) {
      dispatch({ type: "ADD", text: inputRef.current.value });
    }
  };
  return (
    <div className="App">
      <Heading title={"Todo App"}></Heading>
      <div className="max-w-sm">
        <div className="mb-5">
          {todos.map((todo) => (
            <div className="flex items-center mb-2 gap-x-3" key={todo.id}>
              <span className="w-[250px]">{todo.text}</span>
              <button
                onClick={() => onRemoveToDo(todo.id)}
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
            onClick={() => handleAddTodo()}
          >
            Add todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
