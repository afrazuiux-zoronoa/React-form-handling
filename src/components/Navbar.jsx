import React from "react";

const Navbar = ({ count, friends }) => {
  return (
    <div className="flex justify-between items-center px-10 py-4">
      <h1 className="font-bold text-3xl text-stone-900">Cards Maker</h1>
      <div className="flex gap-4"> 
        <div className="flex gap-2 bg-stone-200 px-3 py-2 rounded-md text-black text-sm">
          <p className="font-medium">Friends:</p>
          <p className="font-bold">{friends}</p>
        </div>{" "}
        <div className="flex gap-2 bg-stone-800 px-3 py-2 rounded-md text-white text-sm">
          <p className="font-medium">Cards:</p>
          <p className="font-bold">{count}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
