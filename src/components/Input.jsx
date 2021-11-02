import React, { useContext } from "react";
import TooDooContext from "../context/TooDooContext";
import AddTaskButton from "./AddTaskButton";

function Input() {
  const { setInputText } = useContext(TooDooContext);

  function handleChange({ target }) {
    const { value } = target;
    setInputText(value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Write your tasks"
        onChange={handleChange}
      />
      <AddTaskButton />
    </div>
  );
}
// 
export default Input;
