import { useMemo, useState } from "react";
import RepoCard from "./RepoCard";

function RepoList({ repos }) {
  const [search, setSearch] =
    useState("");

  const [sortBy, setSortBy] =
    useState("stars");

  const filteredRepos =
    useMemo(() => {
      let filtered =
        repos.filter((repo) =>
          repo.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
        );

      switch (sortBy) {
        case "name":
          filtered.sort((a, b) =>
            a.name.localeCompare(
              b.name
            )
          );
          break;

        case "updated":
          filtered.sort(
            (a, b) =>
              new Date(
                b.updatedAt
              ) -
              new Date(
                a.updatedAt
              )
          );
          break;

        default:
          filtered.sort(
            (a, b) =>
              b.stars - a.stars
          );
      }

      return filtered;
    }, [repos, search, sortBy]);

  return (
    <div className="mt-8">

        <div className="mb-6">
        <h2 className="text-2xl font-bold">
            Repository Explorer
        </h2>

        <p className="text-gray-500 mt-1">
            Search, sort and explore public repositories
        </p>

        <p className="text-sm text-gray-500 mt-2">
        Showing {filteredRepos.length} repositories
        </p>
        </div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search repository..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="border p-3 rounded-lg flex-1"
        />

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(
              e.target.value
            )
          }
          className="
        bg-[#161b22]
        border border-[#30363d]
        text-white
        rounded-lg
        px-4 py-2
        focus:outline-none
        focus:border-blue-500
        "
        >
          <option value="stars">
            Sort by Stars
          </option>

          <option value="name">
            Sort by Name
          </option>

          <option value="updated">
            Sort by Updated
          </option>
        </select>
      </div>

      {filteredRepos.length === 0 ? (
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl shadow-md p-6 hover:shadow-lg transition h-full">
            <p className="text-gray-500">
            No repositories found.
            </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredRepos.map((repo) => (
            <RepoCard
            key={repo.id}
            repo={repo}
            />
        ))}
        </div>
      )}
    </div>
  );
}

export default RepoList;