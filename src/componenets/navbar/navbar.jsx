import { Search, Bell, Plus } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="h-16 border-b border-[#30363d] bg-[#161b22] flex items-center justify-between px-6">

      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-white">
          GitStack
        </h1>

        <div className="flex items-center bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2 w-80">
          <Search className="w-4 h-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search repositories..."
            className="bg-transparent outline-none px-2 text-sm text-white w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-gray-300 cursor-pointer" />

        <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
          <Plus className="w-4 h-4" />
          New Repo
        </button>

        <div className="w-9 h-9 rounded-full bg-gray-600"></div>
      </div>

    </nav>
  );
}