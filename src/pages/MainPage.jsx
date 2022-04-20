import React from "react";
import Input from "../components/Input";
import TaskList from "../components/TaskList";
import Footer from "../components/Footer";
import TaskManager from "../components/TaskManager";

function MainPage() {
  return (
    <div>
      <h1 className="title">Too Doo</h1>
      <div id="task-list-main-container">
        <Input />
        <TaskList />
      </div>
      <TaskManager />
      <Footer />
    </div>
  );
}

export default MainPage;
