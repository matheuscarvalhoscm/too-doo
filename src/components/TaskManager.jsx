import React, { useContext } from 'react';
import TooDooContext from '../context/TooDooContext';

function TaskManager() {
  const { setFilters } = useContext(TooDooContext);

  const handleFilters = ({ target }) => {
    const { name } = target;
    const filters = { 
      filter: name
     }
    setFilters(filters);
  };

  return(
    <div id="task-manager">
      <button
        id="all-tasks-filter"
        type="button"
        name="allTasks"
        onClick={ (e) => handleFilters(e) }>
          All Tasks
        </button>
      <button
        id="in-progress-filter"
        type="button"
        name="inProgress"
        onClick={ (e) => handleFilters(e) }>
          In Progress
        </button>
      <button
        id="completed-filter"
        type="button"
        name="completed"
        onClick={ (e) => handleFilters(e) }>
          Completed
        </button>
    </div>
  );
}

export default TaskManager;
