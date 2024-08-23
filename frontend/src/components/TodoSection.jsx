import Addtodo from "./TodoSection/Addtodo";
import List from "./TodoSection/List";
import TodoStatus from "./TodoSection/TodoStatus";

export default function TodoSection() {
  return (
    <div className="w-[50vw] flex flex-col items-center">
      <Addtodo />
      <TodoStatus/>
      <List/>
    </div>
  );
}
