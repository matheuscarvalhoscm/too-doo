import React,{ useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import TooDooContext from '../context/TooDooContext'

function TaskListButtons({ id, isEditing, completed }) {
  const { taskList, setTaskList, editingInput, setEditingInput } = useContext(TooDooContext);

  const handleCompleted = (id, { target }) => {
    const { checked } = target;
    const completedTask = taskList.find((task) => task.id === id);
    const index = taskList.indexOf(completedTask);
    taskList[index].completed = checked;
    setTaskList([...taskList]);
  };

  const handleDelete = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  };

  const handleEdit = (id) => {
    const taskToEdit = taskList.find((task) => task.id === id);
    const index = taskList.indexOf(taskToEdit);
    setEditingInput(taskToEdit.task);
    taskList[index].task = editingInput;
    setTaskList([...taskList]);
    if (isEditing && !editingInput) return alert('Please write something');
    taskList[index].isEditing = !isEditing;
  };
  
  return(
    <div className="task-buttons">
      <input
        className="concluded-input"
        type="checkbox"
        checked={ completed }
        onClick={ (e) => handleCompleted(id, e) }
        onChange={() => {}}
        // ref to the expected onChange warning: https://stackoverflow.com/questions/36715901/reactjs-error-warning/36716016
      />
      <button
        className="edit-button"
        type="button"
        onClick={ () => handleEdit(id) }
      >
        <FontAwesomeIcon icon={ faEdit } />
      </button>
      <button
        className="delete-button"
        type="button"
        onClick={ () => handleDelete(id) } 
      >
        <FontAwesomeIcon icon={ faTrash } />
      </button>
    </div>
  );
}
// 
export default TaskListButtons;
