import { useState } from "react";
import { Board } from "./Board";
import { TodoAdd } from "./TodoAdd";

export const Home = () => () => {
  const InputList = () => {
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState([]);

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
    const handleSubmit = (event) => {
      const newTask = {
        id: Date.now(),
        value: inputValue,
        isDone: false,
      };
      setTodoList([...todoList, newTask]);
    };

    return (
      <div className="w-[59px] h-10  bg-blue-500 justify-center items-center ">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Add</button>

        <Board />
      </div>
    );
  };
};

export default Home;
