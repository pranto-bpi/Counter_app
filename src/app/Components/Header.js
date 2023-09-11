import React from "react";
import{FiSearch} from "react-icons/fi"

export const Header = () => {
  return (
    <div className=" h-full w-screen ">
          <div className=" w-screen h-16 bg-gray-900 text-gray-200 flex items-center justify-between">
          
               <div>
                     <p className=" ps-5 font-semibold text-2xl ">Counter App</p>
               </div>

               <div>
                    <ul className="flex gap-8 font-semibold  ">
                         <li className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...  px-6 rounded   cursor-pointer">Home</li>

                         <li  className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...  px-6 rounded  cursor-pointer ">About</li>

                         <li  className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...  px-6 rounded  cursor-pointer">Contact</li>

                         <li  className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...  px-6 rounded cursor-pointer ">Portfolio</li>

                         <li  className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... px-6 rounded  cursor-pointer ">Service</li>

                         <li  className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... px-6 rounded  cursor-pointer ">Blog</li>
                    </ul>
               </div>

               <div>
                    <p className="pe-5 text-2xl cursor-pointer "><FiSearch></FiSearch></p>
               </div>
          </div>
     </div>
  );
};
