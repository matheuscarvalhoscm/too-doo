import React, { useContext } from "react";
import TooDooContext from "../context/TooDooContext";
import TaskListButtons from "./TaskListButtons";

function TaskList() {
  const { taskList } = useContext(TooDooContext);

  if (taskList !== [] || taskList !== undefined) {
    return (
      <ul>
        {taskList.map(({ id, task, isEditing }, index) => (
          <div className="task" key={ index }>
            { !isEditing 
              ? <li>{ task }</li> 
              : <input type="text" value={ task } />}
            <TaskListButtons id={ id } isEditing={ isEditing } />
          </div>
        ))}
      </ul>
    );
  }
}
//
export default TaskList;
