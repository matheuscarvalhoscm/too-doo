import React, { useContext, useEffect } from "react";
import TooDooContext from "../context/TooDooContext";
import TaskListButtons from "./TaskListButtons";

function TaskList() {
  const { taskList } = useContext(TooDooContext);

  if (taskList !== [] || taskList !== undefined)
    return (
      <div>
        <ul>
          {taskList.map((task) => (
            <div>
              <li>{task}</li>
              <TaskListButtons />
            </div>
          ))}
        </ul>
      </div>
    );
}

export default TaskList;
