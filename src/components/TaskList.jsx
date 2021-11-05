import React, { useContext } from "react";
import TooDooContext from "../context/TooDooContext";
import TaskListButtons from "./TaskListButtons";

function TaskList() {
  const { taskList } = useContext(TooDooContext);

  if (taskList !== [] || taskList !== undefined)
    return (
        <ul>
          {taskList.map((task) => (
            <div className="task">
              <li>{ task }</li>
              <TaskListButtons />
            </div>
          ))}
        </ul>
    );
}
// 
export default TaskList;
