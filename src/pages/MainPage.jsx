import React from "react";
import Input from "../components/Input";
import TaskList from "../components/TaskList";
import Footer from "../components/Footer";
import TaskManager from "../components/TaskManager";

function MainPage() {
  return (
    <div>
      <h1>Too Doo</h1>
      <Input />
      <TaskList />
      <TaskManager />
      <Footer />
    </div>
  );
}

export default MainPage;
