import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Button from "../components/Button";
import { useTheme } from "../context/ThemeContext";

export default function TaskManager() {
  const { theme, toggleTheme } = useTheme();
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!task.trim()) return;
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  const toggleComplete = (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Task Manager</h2>
        <Button onClick={toggleTheme} variant="secondary">
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </Button>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add a new task..."
          className="w-full p-2 border rounded"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2">
        <Button variant={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")}>All</Button>
        <Button variant={filter === "active" ? "primary" : "secondary"} onClick={() => setFilter("active")}>Active</Button>
        <Button variant={filter === "completed" ? "primary" : "secondary"} onClick={() => setFilter("completed")}>Completed</Button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.map((t) => (
          <li
            key={t.id}
            className={`flex justify-between items-center p-2 border rounded ${t.completed ? "line-through text-gray-500" : ""}`}
          >
            <span>{t.text}</span>
            <div className="space-x-2">
              <Button onClick={() => toggleComplete(t.id)} variant="secondary">
                {t.completed ? "Undo" : "Done"}
              </Button>
              <Button onClick={() => deleteTask(t.id)} variant="danger">Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
