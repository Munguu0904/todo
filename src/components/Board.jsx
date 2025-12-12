import React from "react";
import { TodoAdd } from "./TodoAdd";

export const Board = () => {
  return (
    <div className="flex justify-center pt-4 bg-gray-100 h-screen">
      <div
        className="w-[377px] h-[290px] flex  bg-blue-200 flex-col gap-4 pt-6 drop-shadow-2xl rounded-md
      "
      >
        <div className="w-[345px] h-7 flex items-center justify-center  font-semibold   ml-4">
          <div>To-Do list</div>
        </div>
        <div className="w-[345px] h-[38px] bg-white mx-4 flex items-center px-2 gap-2 size-5">
          {" "}
          <div className="flex     justify-center items-center ">
            <div className="w-[280px] h-10  border-gray-300 border-2 rounded-md flex  px-2  items-center ">
              <input taskInput type="text" className="w-full h-full" />
            </div>
          </div>
          <button className="w-15 h-10 rounded-md bg-blue-500 flex justify-center items-center text-white">
            Add
          </button>
        </div>
        <div className="w-[345px] h-[32]  flex pl-4 gap-1.5 ">
          <button className="w-[38px] h-8 bg-blue-500 rounded-md gap-1.5 text-white flex justify-center items-center">
            All
          </button>
          <button className="w-[60px] h-8 bg-gray-400 rounded-md flex justify-center items-center">
            Active
          </button>
          <button className="w-[87px] h-8 rounded-md bg-gray-400 flex justify-center items-center">
            Completed
          </button>
        </div>
        {/* <div className="w-[345px] h-4 flex justify-center size-4 text-gray-600">
          No tasks yet. Add one above!
        </div> */}
        <div className="w-[345px] h-4 flex justify-center gap-2 text-sm pt-10">
          <div>Powered by</div>
          <div className="text-blue-600">Pinecone academy</div>
        </div>
      </div>
    </div>
  );
};
