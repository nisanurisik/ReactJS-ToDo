import React from "react";
import "./ToDo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

function ToDo({ tasks, toggleTaskCompletion, removeTask }) {
  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <section id="Form-tasks">
      <div className="left-section">
        <h2 className="Form-header">Task to do</h2>
        <ul>
          {incompleteTasks.map((task, index) => (
            <li key={index} className="Form-todo-label">
              <span>{task.text}</span>
              <div className="Form-icon">
                <div className="Form-icon-check" onClick={() => toggleTaskCompletion(index)}>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div className="Form-icon-trash" onClick={() => removeTask(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="right-section">
        <h2 className="Form-header-completed">Completed Tasks</h2>
        <ul>
          {completedTasks.map((task, index) => (
            <li key={index} className="Form-todo-label-completed">
              <span>{task.text}</span>
              <div className="Form-icon">
                <div className="Form-icon-trash" onClick={() => removeTask(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ToDo;
