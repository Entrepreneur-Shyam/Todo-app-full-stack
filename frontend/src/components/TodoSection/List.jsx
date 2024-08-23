import { useContext } from "react";
import { TodoContext } from "../Store/TodoContext";

export default function List() {
  const {
    allTodos,
    completedTodos,
    failedTodos,

    deleteTodos,
    allTodosToCompletedTodos,
    allTodosToFailedTodos,

    completedTodoReset,
    completedTodosToFailedTodos,

    failedTodoReset,
    failedTodosToCompletedTodos,

    activeStatus,
  } = useContext(TodoContext);

  let activeList;

  switch (activeStatus) {
    case "allTodos":
      activeList = allTodos;

      break;
    case "completedTodos":
      activeList = completedTodos;
      break;
    case "failedTodos":
      activeList = failedTodos;
      break;
    default:
      activeList = allTodos;
  }
  console.log("allTodos here", allTodos);

  return (
    <div className="mt-4 w-2/3 ">
      <ul>
        {activeList.map((el) => {
          return (
            <li className="flex justify-between mb-3" key={el._id}>
              {el.title}

              <span className="flex gap-5">
                {activeList === allTodos && (
                  <>
                    <button
                      onClick={() => allTodosToCompletedTodos(el._id)}
                      className="bg-green-400 px-2 rounded-sm"
                    >
                      Completed
                    </button>
                    <button
                      onClick={() => {
                        allTodosToFailedTodos(el._id);
                      }}
                      className="bg-red-500"
                    >
                      Failed
                    </button>
                    <button
                      onClick={() => deleteTodos(el._id)}
                      className="bg-red-200"
                    >
                      Deleted
                    </button>
                  </>
                )}
                {activeList === completedTodos && (
                  <>
                    <button
                      onClick={() => completedTodosToFailedTodos(el._id)}
                      className="bg-red-500"
                    >
                      Failed
                    </button>
                    <button
                      onClick={() => completedTodoReset(el._id)}
                      className="bg-gray-400 px-2 rounded-sm"
                    >
                      Reset
                    </button>
                  </>
                )}
                {activeList === failedTodos && (
                  <>
                    <button
                      onClick={() => {
                        failedTodosToCompletedTodos(el._id);
                      }}
                      className="bg-green-500"
                    >
                      Completed
                    </button>
                    <button
                      onClick={() => failedTodoReset(el._id)}
                      className="bg-gray-400 px-2 rounded-sm"
                    >
                      Reset
                    </button>
                  </>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
