// src/components/Navbar.jsx
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 px-6 py-4 flex justify-between items-center shadow">
      <h1 className="font-bold text-xl text-gray-900 dark:text-white">Task Manager</h1>
      <div className="flex gap-4">
        <button
          onClick={toggleTheme}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
}
