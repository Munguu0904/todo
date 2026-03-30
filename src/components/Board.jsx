const Board = ({ tasks = [], filter, onToggle, onDelete }) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div className="space-y-3 min-h-[100px] text-left">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <div
            key={task.id}
            className="group flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition shadow-sm"
          >
            <div
              onClick={() => onToggle(task.id)}
              className={`w-5 h-5  border mr-3 flex items-center justify-center cursor-pointer transition ${
                task.completed
                  ? "bg-blue-500 border-blue-500"
                  : "border-gray-300 bg-white"
              }`}
            >
              {task.completed && (
                <span className="text-white text-[10px]">✓</span>
              )}
            </div>

            <span
              onClick={() => onToggle(task.id)}
              className={`flex-1 text-sm cursor-pointer ${
                task.completed ? "line-through text-gray-400" : "text-gray-700"
              }`}
            >
              {task.text}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(task.id);
              }}
              className="ml-2 text-gray-300 hover:text-red-500 transition-colors p-1"
              title="Delete task"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        ))
      ) : (
        <div className="py-10 text-center text-gray-400 text-sm">
          No tasks found.
        </div>
      )}
    </div>
  );
};

export default Board;
