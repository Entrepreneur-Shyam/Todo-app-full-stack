import { useContext, useRef } from "react";
import { TodoContext } from "../Store/TodoContext";

export default function Addtodo() {
  const { addNewTodo } = useContext(TodoContext);
  const inputTodo = useRef();


  function handleAddTodo() {
    const newTodo = inputTodo.current.value;

    addNewTodo(newTodo);
    console.log("Before",inputTodo.current.value)
    inputTodo.current.value = ""; 
    console.log("after",inputTodo.current.value)
  }

  return (
    <div className="flex gap-3 justify-between w-[40vw] bg-slate-600 mt-14 p-2">
      <input
        className="rounded-lg flex-grow px-3"
        type="text"
        ref={inputTodo}
        placeholder="Type your new todo here"
      />
      <button
        onClick={handleAddTodo}
        className="bg-slate-100 py-2 px-5 rounded-md"
      >
        Add
      </button>
    </div>
  );
}
