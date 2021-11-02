import React, { useContext } from 'react';
import TooDooContext from '../context/TooDooContext';

function AddTaskButton() {
  const { inputText, taskList, setTaskList } = useContext(TooDooContext);

  function handleClick() {
    const tasks = [...taskList];
    tasks.push(inputText);
    setTaskList(tasks);
  }
  return(
    <button type="button" onClick={ handleClick}> Add task </button>
  );
}
// 
export default AddTaskButton;
