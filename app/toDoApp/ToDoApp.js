"use client";
import React, { useState } from "react";
import "./ToDoAPP.css";

const ToDoApp = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const trimmed = taskInput.trim();
    if (!trimmed) return;

    const newTask = {
      text: trimmed,
      status: "todo",
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const moveToOngoing = (index) => {
    const updated = [...tasks];
    updated[index].status = "ongoing";
    setTasks(updated);
  };

  const markAsCompleted = (index) => {
    const updated = [...tasks];
    updated[index].status = "completed";
    setTasks(updated);
  };

  const removeTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const ongoingTasks = tasks.filter((task) => task.status === "ongoing");
  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div className="toDoApp">
      <h1>📝 To-Do Application</h1>

      <div className="taskInputContainer">
        <input
          type="text"
          placeholder="Add a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="taskSections">
        <div className="taskSection">
          <h2>📋 To-Do</h2>
          {todoTasks.length > 0 ? (
            todoTasks.map((task, i) => (
              <div key={i} className="taskItem">
                <span>{task.text}</span>
                <button onClick={() => moveToOngoing(tasks.indexOf(task))}>
                  Start
                </button>
                <button onClick={() => removeTask(tasks.indexOf(task))}>
                  ❌
                </button>
              </div>
            ))
          ) : (
            <p>No tasks</p>
          )}
        </div>

        <div className="taskSection">
          <h2>⏳ Ongoing</h2>
          {ongoingTasks.length > 0 ? (
            ongoingTasks.map((task, i) => (
              <div key={i} className="taskItem">
                <span>{task.text}</span>
                <button onClick={() => markAsCompleted(tasks.indexOf(task))}>
                  ✅ Complete
                </button>
                <button onClick={() => removeTask(tasks.indexOf(task))}>
                  ❌
                </button>
              </div>
            ))
          ) : (
            <p>No ongoing tasks</p>
          )}
        </div>

        <div className="taskSection">
          <h2>✅ Completed</h2>
          {completedTasks.length > 0 ? (
            completedTasks.map((task, i) => (
              <div key={i} className="taskItem completed">
                <span>{task.text}</span>
                <button onClick={() => removeTask(tasks.indexOf(task))}>
                  🗑️
                </button>
              </div>
            ))
          ) : (
            <p>No completed tasks</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoApp;
