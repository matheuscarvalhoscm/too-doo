import React,{ useContext } from 'react';
import TooDooContext from '../context/TooDooContext'

function TaskListButtons({ id, isEditing }) {
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
    taskList[index].isEditing = !isEditing;
    setEditingInput(taskToEdit.task);
    taskList[index].task = editingInput;
    setTaskList([...taskList]);
  };
  
  return(
    <div className="task-buttons">
      <input
        className="concluded-button"
        type="checkbox"
        onClick={ (e) => handleCompleted(id, e) }
      />
      <button
        className="edit-button"
        type="button"
        onClick={ () => handleEdit(id) }
      />
      <button
        className="delete-button"
        type="button"
        onClick={ () => handleDelete(id) } 
      />
    </div>
  );
}
// 
export default TaskListButtons;
