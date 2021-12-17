import React, { useContext } from 'react';
import TooDooContext from '../context/TooDooContext';
import TaskListButtons from './TaskListButtons';

function TaskList() {
  const { 
    taskList,
    editingInput,
    setEditingInput,
    filters 
  } = useContext(TooDooContext);
  const { filter } = filters;

  const handleEditingText = ({ target }) => {
    const { value } = target;
    setEditingInput(value);
  };

  if (taskList !== [] || taskList !== undefined) {
    return (
      <ul>
        { taskList
            .filter((task) => {
              if (filter === 'completed') {
                return task.completed === true;
              } else if (filter === 'inProgress') {
                return task.completed === false;
              } else if (filter === 'allTasks') {
                return task;
              }
              return filter
            })
            .map(({ id, task, isEditing, completed }, index) => (
          <div className="task" key={ index }>
            { !isEditing ? (
              <li>{ task }</li>
            ) : (
              <input
                type="text"
                value={ editingInput }
                onChange={ (e) => handleEditingText(e) }
              />
            )}
            <TaskListButtons id={ id } isEditing={ isEditing } completed={ completed } />
          </div>
        ))}
      </ul>
    );
  }
}

export default TaskList;
