import { useReducer, useRef } from "react";

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

export default function useTodos(intialState: Todo[]): {
  todos: Todo[];
  inputRef: React.LegacyRef<HTMLInputElement> | undefined;
  onAddTodo: () => void;
  onRemoveTodo: (todoId: number) => void;
} {
  const [todos, dispatch] = useReducer(todoReducer, intialState);
  const inputRef = useRef<HTMLInputElement>(null);
  const onRemoveTodo = (todoId: number) => {
    dispatch({ type: "REMOVE", id: todoId });
  };

  const onAddTodo = () => {
    if (inputRef.current?.value) {
      dispatch({ type: "ADD", text: inputRef.current.value });
      inputRef.current.value = "";
    }
  };
  return {
    todos,
    inputRef,
    onAddTodo,
    onRemoveTodo,
  };
}
