import { useState } from "react";

function RepoCard({ repo }) {
  const [expanded, setExpanded] =
    useState(false);

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl shadow-md p-5 h-full flex flex-col hover:shadow-lg transition-shadow">
      
      {/* Repository Name + Language */}
      <div className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        gap-2
        mb-2
      ">
        <h3 className="
          font-bold
          text-lg
          sm:text-xl
          break-all
        ">
          {repo.name}
        </h3>

        <span
          className="
            text-sm
            bg-blue-500/15
            text-blue-400
            border border-blue-500/20
            px-3 py-1
            rounded-full
            font-medium
            whitespace-nowrap
            self-start
          "
        >
          {repo.language || "Unknown"}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-400 mb-4 flex-grow">
        {repo.description ||
          "No description available"}
      </p>

      {/* Stats */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-gray-400">
        <span>
          ⭐ Stars: {repo.stars}
        </span>

        <span>
          Updated{" "}
          {new Date(
            repo.updatedAt
          ).toLocaleDateString()}
        </span>
      </div>

      {/* Expand Button */}
      <button
        onClick={() =>
          setExpanded(!expanded)
        }
        className="mt-4 text-blue-600 font-medium"
      >
        {expanded
          ? "Hide Details"
          : "View Details"}
      </button>

      {/* Expanded Section */}
      {expanded && (
        <div className="mt-4 border-t border-[#30363d] pt-4 text-sm break-words">
          <p>
            Open Issues:{" "}
            {repo.openIssues}
          </p>

          <p>
            Default Branch:{" "}
            {repo.defaultBranch}
          </p>

          <a
            href={repo.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 break-all"
          >
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
}

export default RepoCard;