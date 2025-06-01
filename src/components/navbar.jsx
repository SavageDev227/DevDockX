import React from "react";
import { BellIcon, MenuIcon, SearchIcon, UserIcon } from "lucide-react";

export default function NavBar() {
  return (
    <header className="bg-slate-800 border-b border-slate-700 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <button className="p-1.5 rounded-md hover:bg-slate-700">
            <MenuIcon className="h-5 w-5 text-slate-300" />
          </button>
          <div className="flex items-center">
            <div className="h-8 w-8 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="ml-2 text-white text-lg font-medium">
              DevDockX
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center relative max-w-md w-full mx-4">
          <SearchIcon className="h-4 w-4 absolute left-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search tools, docs, projects..."
            className="pl-9 pr-3 py-1.5 w-full bg-slate-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-1.5 rounded-md hover:bg-slate-700 relative">
            <BellIcon className="h-5 w-5 text-slate-300" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="h-8 w-8 bg-slate-600 rounded-full flex items-center justify-center">
            <UserIcon className="h-5 w-5 text-slate-300" />
          </div>
        </div>
      </div>
    </header>
  );
}
