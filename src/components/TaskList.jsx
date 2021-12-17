import React, { useContext } from "react";
import TooDooContext from "../context/TooDooContext";
import TaskListButtons from "./TaskListButtons";

function TaskList() {
  const { taskList, editingInput, setEditingInput } = useContext(TooDooContext);

  const handleEditingText = ({ target }) => {
    const { value } = target;
    setEditingInput(value);
  }

  if (taskList !== [] || taskList !== undefined) {
    return (
      <ul>
        {taskList.map(({ id, task, isEditing }, index) => (
          <div className="task" key={ index }>
            { !isEditing 
              ? <li>{ task }</li> 
              : <input type="text" value={ editingInput } onChange={ (e) => handleEditingText(e) } />}
            <TaskListButtons id={ id } isEditing={ isEditing } />
          </div>
        ))}
      </ul>
    );
  }
}
//
export default TaskList;
