import React, { useContext } from "react";
import TooDooContext from "../context/TooDooContext";
import AddTaskButton from "./AddTaskButton";

function Input() {
  const { inputText, setInputText } = useContext(TooDooContext);

  function handleChange({ target }) {
    const { value } = target;
    setInputText(value);
  }

  return (
    <div id="add-task">
      <input
        id="task-input"
        type="text"
        placeholder="Write your tasks"
        value={ inputText }
        onChange={ handleChange }
      />
      <AddTaskButton />
    </div>
  );
}
// 
export default Input;
