import { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./components/Model";
import Todolist from "./components/Todolist";

const App: React.FC = () => {
  // md:my-4 md:text-[1.2rem])

  // state to manage the text written in the input field
  const [todo, setToDo] = useState<string>("");

  // state to manage the colleciton of all the added todos
  const [TodoS, setToDoS] = useState<Todo[]>([]);

  // function to manage the todo to add after the go button is pressed
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (TodoS) {
      setToDoS([...TodoS, { id: Date.now(), todo: todo, isDone: false }]);
      setToDo("");
    }
  };
  console.log(TodoS);
  return (
    <div className=" w-[100vw] min-h-[100vh] flex flex-col items-center bg-primary font-neucha">
      <span className="uppercase text-6xl my-8 text-white z-1 text-center">
        Taskify
      </span>
      <InputField todo={todo} settodo={setToDo} handleAdd={handleAdd} />
      <Todolist toDos={TodoS} setToDos={setToDoS} />
    </div>
  );
};

export default App;
