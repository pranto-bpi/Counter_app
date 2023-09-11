"use client";
import React, { useState } from "react";

export const Counter = () => {
  // plus ar function

  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  // minus
  const minus = () => {
    setCount(count - 1);
    if (count == 0) {
      setCount(0);
    } else {
    }
  };

  return (
    <div>

          <div className="bg-violet-500 h-60 w-[500px]  mx-auto mt-10 rounded ">

               <div className=" flex items-center justify-center  w-full h-full ">
                    
                    <button className="m-5 h-15 w-60 bg-sky-300 justify-center p-5 rounded" onClick={add}> Plus  </button>
                    <button className="m-5 h-15 w-60 bg-sky-300 justify-center p-5 rounded " onClick={minus}> Minus </button>

               </div>
          
          </div>

          <div className=" flex items-center justify-center bg-green-300 w-[500px]  mx-auto mt-10 rounded h-10">
               <p>{count}</p>
          </div>
    </div>
  );
};
