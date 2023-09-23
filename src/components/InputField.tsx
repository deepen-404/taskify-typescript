import { useRef } from "react";
import "../index.css";

interface Props {
  todo: string;
  settodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({ todo, settodo, handleAdd }: Props) => {
  // ref to remove the focus from the input after clicking on the go button
  const removeFocus = useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex w-[90%] relative items-center"
      onSubmit={(e) => {
        handleAdd(e);
        removeFocus.current?.blur();
        // blur remove the focus form the input box
      }}
    >
      <input
        ref={removeFocus}
        value={todo}
        onChange={(e) => settodo(e.target.value)}
        type="input"
        placeholder="Enter a task"
        className="w-[80%] text-2xl rounded-full py-[1.1rem] px-7 mx-auto transition-[0.2s] shadow-lg focus:shadow-custom focus:outline-none placeholder:text-[1.5rem]"
      />
      <button
        type="submit"
        className="submit-button absolute w-[3rem] h-[3rem] rounded-full m-3 right-[8rem] max-w-screen-beforeSixHdr:right-[1rem] lg:right-[8rem] md:right-[5rem] sm:right-[4rem] bg-primary text-xl text-white transition-[0.2s] shadow-button hover:bg-[#388ae2]"
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
