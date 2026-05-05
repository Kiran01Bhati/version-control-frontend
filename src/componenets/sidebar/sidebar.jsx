import {
  Home,
  FolderGit2,
  GitPullRequest,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-[#30363d] bg-[#161b22] min-h-[calc(100vh-64px)] p-4">

      <div className="space-y-2">

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#21262d] text-white">
          <Home className="w-5 h-5" />
          Dashboard
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#21262d] text-gray-300">
          <FolderGit2 className="w-5 h-5" />
          Repositories
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#21262d] text-gray-300">
          <GitPullRequest className="w-5 h-5" />
          Pull Requests
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#21262d] text-gray-300">
          <Settings className="w-5 h-5" />
          Settings
        </button>

      </div>
    </aside>
  );
}