import { useState, useEffect } from "react";
import Board from "@/components/Board";
import TodoAdd from "@/components/TodoAdd";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem("my-todos");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("my-todos", JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((t) => !t.completed));
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-[#f4f4f4] py-12 px-4 flex justify-center items-start">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl transition-all">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 tracking-tight">
          To-Do list
        </h1>

        <TodoAdd onAddTask={addTask} />

        <div className="flex gap-2 my-6">
          {["All", "Active", "Completed"].map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${
                activeFilter === f
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <Board
          tasks={tasks}
          filter={activeFilter}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />

        {totalCount > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-sm">
            <span className="text-gray-500">
              {completedCount} of {totalCount} tasks completed
            </span>
            <button
              onClick={clearCompleted}
              className="text-red-400 hover:text-red-600 font-medium transition"
            >
              Clear completed
            </button>
          </div>
        )}

        <footer className="text-gray-300 text-[10px] mt-8 text-center uppercase tracking-widest">
          Powered by{" "}
          <span className="text-blue-400 font-semibold">Pinecone academy</span>
        </footer>
      </div>
    </div>
  );
};

export default Home;
