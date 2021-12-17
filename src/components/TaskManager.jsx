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
    <div>
      <button
        type="button"
        name="allTasks"
        onClick={ (e) => handleFilters(e) }>
          All Tasks
        </button>
      <button
        type="button"
        name="inProgress"
        onClick={ (e) => handleFilters(e) }>
          In Progress
        </button>
      <button
        type="button"
        name="completed"
        onClick={ (e) => handleFilters(e) }>
          Completed
        </button>
    </div>
  );
}

export default TaskManager;
