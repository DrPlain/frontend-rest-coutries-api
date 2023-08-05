import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";

export default function Navbar({ setDarkMode }) {
  const handleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-6 shadow-md">
        <h1 className="font-bold">Where in the world?</h1>
        <div className="flex items center" onClick={handleDarkMode}>
          <MdOutlineDarkMode size={25} />
          <p className="pl-3 font-semibold">Dark Mode</p>
        </div>
      </div>
    </div>
  );
}
