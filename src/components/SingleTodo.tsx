import { AiFillEdit } from "react-icons/ai";
import { MdDelete, MdDone } from "react-icons/md";
import { Todo } from "./Model";
import { useState, useRef, useEffect } from "react";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  // keep track of either edit is enable or disabled
  const [edit, setEdit] = useState<boolean>(false);
  // keep track of the changes to be made in the note
  const [edtToDo, setEditToDo] = useState<string>(todo.todo);
  // to autofocus onto the input field
  const autoFocus = useRef<HTMLInputElement>(null);

  //   autofocus implementation
  useEffect(() => {
    autoFocus.current?.focus();
  }, [edit]);

  // function
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  // function
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // function
  const handleEdit = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };

  // function
  const handleEditSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, todo: edtToDo } : prevTodo
      )
    );
    setEdit(false); // Disable edit mode after submitting changes
  };

  return (
    <form
      onSubmit={(e) => handleEditSubmit(e, todo.id)}
      className="single__todo__container border-2 border-black m-4 flex gap-2 w-[29.5%] rounded-md p-[0.85rem] mt-4 bg-singleTodoBackground max-w-screen-beforeSixHdr:w-[90%] sm:w-[90%] md:w-[40%] lg:w-[27%]"
    >
      {edit ? (
        <input
          ref={autoFocus}
          value={edtToDo}
          type="text"
          onChange={(e) => setEditToDo(e.target.value)}
          className="w-[65%] outline-none transition-transform duration-300"
        />
      ) : todo.isDone ? (
        <s className="flex-1 p-1 border-none text-2xl focus:outline-none">
          {todo.todo}
        </s>
      ) : (
        <span className="flex-1 p-1 border-none text-2xl focus:outline-none">
          {todo.todo}
        </span>
      )}

      <div className="flex pt-3 justify-between">
        <span className="icon">
          <AiFillEdit onClick={() => handleEdit()} />
        </span>
        <span className="icon">
          <MdDelete onClick={() => handleDelete(todo.id)} />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
