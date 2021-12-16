import React, { useContext } from "react";
import TooDooContext from "../context/TooDooContext";
import TaskListButtons from "./TaskListButtons";

function TaskList() {
  const { taskList } = useContext(TooDooContext);

  if (taskList !== [] || taskList !== undefined) {
    return (
      <ul>
        {taskList.map(({ id, task }, index) => (
          <div className="task" key={ index }>
            <li>{ task }</li>
            <TaskListButtons id={ id } />
          </div>
        ))}
      </ul>
    );
  }
}
//
export default TaskList;
