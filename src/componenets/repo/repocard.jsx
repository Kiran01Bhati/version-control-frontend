import { Star, GitFork, Eye } from "lucide-react";

export default function RepoCard({
  name,
  description,
  stars,
  forks,
  watchers,
  visibility,
}) {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-5 hover:border-green-500 transition duration-300">

      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-green-500">
            {name}
          </h2>

          <p className="text-gray-400 mt-2">
            {description}
          </p>
        </div>

        <span className="border border-[#30363d] px-3 py-1 rounded-full text-sm text-gray-300">
          {visibility}
        </span>
      </div>

      <div className="flex gap-6 mt-5 text-gray-400 text-sm">

        <div className="flex items-center gap-1">
          <Star size={16} />
          {stars}
        </div>

        <div className="flex items-center gap-1">
          <GitFork size={16} />
          {forks}
        </div>

        <div className="flex items-center gap-1">
          <Eye size={16} />
          {watchers}
        </div>

      </div>
    </div>
  );
}