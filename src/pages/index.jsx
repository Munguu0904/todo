import { Board } from "@/components/Board";
import { useState } from "react";
import { TodoAdd } from "@/components/TodoAdd";

const Home = () => {
  const [filter, setFilter] = useState(["All", "Active", "Completed"]);

  const handleClick = (e) => {
    const selectedFilter = e.target.id;
    console.log("Selected filter:", selectedFilter);
  };

  return (
    <div>
      {filter.map((value) => (
        <button id={value}>
          {" "}
          onClick={handleClick}
          {value}
        </button>
      ))}
      <Board />
    </div>
  );
};
export default Home;
