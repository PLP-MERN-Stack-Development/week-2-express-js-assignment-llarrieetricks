import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Button from "./Button";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="max-w-xl mx-auto p-4 bg-white dark:bg-gray-800 rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Task Manager</h2>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 p-2 border rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex justify-center gap-2 mb-4">
        <Button onClick={() => setFilter("all")} variant={filter === "all" ? "primary" : "secondary"}>All</Button>
        <Button onClick={() => setFilter("active")} variant={filter === "active" ? "primary" : "secondary"}>Active</Button>
        <Button onClick={() => setFilter("completed")} variant={filter === "completed" ? "primary" : "secondary"}>Completed</Button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border rounded dark:border-gray-600"
          >
            <span
              onClick={() => toggleTask(index)}
              className={`flex-1 cursor-pointer ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.text}
            </span>
            <Button onClick={() => deleteTask(index)} variant="danger">Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
