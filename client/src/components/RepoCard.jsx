import { useState } from "react";

function RepoCard({ repo }) {
  const [expanded, setExpanded] =
    useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-xl">
            {repo.name}
          </h3>

          <p className="text-gray-600 mt-2">
            {repo.description ||
              "No description available"}
          </p>
        </div>

        <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
          {repo.language || "Unknown"}
        </span>
      </div>

      <div className="flex gap-6 mt-4 text-sm text-gray-600">
        <span>⭐ Stars: {repo.stars}</span>

        <span>
          Updated:
          {" "}
          {new Date(
            repo.updatedAt
          ).toLocaleDateString()}
        </span>
      </div>

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

      {expanded && (
        <div className="mt-4 border-t pt-4 text-sm">
          <p>
            Open Issues:
            {" "}
            {repo.openIssues}
          </p>

          <p>
            Default Branch:
            {" "}
            {repo.defaultBranch}
          </p>

          <a
            href={repo.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
}

export default RepoCard;