import { useState } from "react";
import "./NewTask.css";

function NewTask({ addTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <>
      <form className="Form-group">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          type="text"
          className="Form"
          placeholder="Add a new task"
        />
        <button type="submit" className="Btn-submit" onClick={handleAddTask}>
          Submit
        </button>
      </form>
      <hr />
    </>
  );
}

export default NewTask;
