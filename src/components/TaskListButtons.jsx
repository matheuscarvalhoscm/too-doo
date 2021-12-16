import React,{ useContext } from 'react';
import TooDooContext from '../context/TooDooContext'

function TaskListButtons({ id }) {
  const {taskList, setTaskList } = useContext(TooDooContext);

  const handleDelete = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  }
  
  return(
    <div className="task-buttons">
      <input className="concluded-button" type="checkbox" />
      <button className="edit-button" type="button" />
      <button className="delete-button" type="button" onClick={ () => handleDelete(id) } />
    </div>
  );
}
// 
export default TaskListButtons;
