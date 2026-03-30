import React, { useState } from "react";

const TodoAdd = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      if (onAddTask) onAddTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button
        onClick={handleAdd}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
      >
        Add
      </button>
    </div>
  );
};

export default TodoAdd;
