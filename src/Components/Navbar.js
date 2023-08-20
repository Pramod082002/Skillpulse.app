import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="header sticky top-0 bg-white flex items-center justify-between px-8 py-02">
        <h1 className="w-3/12">
          <a className="font-Pacifico" href="">SkillPulse</a>
        </h1>
        <nav className="nav font-semibold text-lg">
          <ul className="flex items-center ">
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active ">
              <a href="">Home</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="/dashboard">Dashboard</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">FAQ</a>
            </li>
          </ul>
        </nav>
        <div className="w-3/12 flex justify-end">
          <button className="btn btn-green mr-4 bg-slate-600 text-white px-4 py-2 rounded-[25px]">
            Button
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
