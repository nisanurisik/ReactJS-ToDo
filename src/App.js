import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./component/Header";
import ToDo from "./component/ToDo";
import NewTask from "./component/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []); // Sayfa yüklendiğinde sadece bir kez çalışır

  const addTask = (task) => {
    const newTasks = [...tasks, { text: task, completed: false }];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <>
      <Header />
      <main>
        <NewTask addTask={addTask} />
        <ToDo tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} removeTask={removeTask} />
      </main>
    </>
  );
}

export default App;
