import React, { useContext, useEffect } from 'react';
import TooDooContext from '../context/TooDooContext';

function AddTaskButton() {
  const { inputText, setInputText, taskList, setTaskList } = useContext(TooDooContext);

  function handleClick() {
    const tasks = [...taskList, inputText];
    setTaskList(tasks);
    setInputText('');
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(taskList));
  }, [taskList]);

  
  return(
    <button type="button" onClick={ handleClick }> Add task </button>
  );
}
// 
export default AddTaskButton;
