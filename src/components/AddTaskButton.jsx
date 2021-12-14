import React, { useContext } from 'react';
import TooDooContext from '../context/TooDooContext';

function AddTaskButton() {
  const { inputText, setInputText, taskList, setTaskList } = useContext(TooDooContext);

  function handleClick() {
    const tasks = [...taskList, inputText];
    setTaskList(tasks);
    setInputText('');
  }
  return(
    <button type="button" onClick={ handleClick }> Add task </button>
  );
}
// 
export default AddTaskButton;
