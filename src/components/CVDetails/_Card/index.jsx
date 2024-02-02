import React from "react";
export const Card = ({ title, children }) => {
  return (
    <div className="w-full mb-5 flex flex-col bg-gray-50 px-2 py-4 shadow-lg rounded-md drop-shadow-lg text-black">
      <h4 className="text-2xl font-bold text-Black tracking-wide border-b-2 border-b-gray-600 mb-2 mx-2" >{title}</h4>
      {children}
    </div>
  );
};
