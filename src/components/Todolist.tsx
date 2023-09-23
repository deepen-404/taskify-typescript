// type
import { Todo } from "./Model";

// component
import SingleTodo from "./SingleTodo";

interface Props {
  toDos: Todo[];
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist = ({ toDos, setToDos }: Props) => {
  return (
    <div className="flex justify-evenly w-[90%] flex-wrap">
      {toDos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={toDos}
          setTodos={setToDos}
        />
      ))}
    </div>
  );
};

export default Todolist;
