import { useContext } from "react";
import { TodoContext } from "../Store/TodoContext";

function TodoStatus() {
  let style = "bg-stone-300 rounded-md px-3 py-2";
  const {
    changedStatusAllTodos,
    changedStatusCompletedTodos,
    changedStatusFailedTodos,
  } = useContext(TodoContext);

  return (
    <div className="mt-10 flex justify-between px-20 w-full">
      <button onClick={changedStatusAllTodos} className={style}>
        All Todos
      </button>
      <button onClick={changedStatusCompletedTodos} className={style}>Completed Todos </button>
      <button onClick={changedStatusFailedTodos} className={style}>Failed Todos</button>
    </div>
  );
}

export default TodoStatus;
