import { useEffect, useState } from "react";

import ProfileCard from "../components/ProfileCard";
import StatsCards from "../components/StatsCards";
import RepoList from "../components/RepoList";
import DeveloperAnalytics from "../components/DeveloperAnalytics";

import { fetchGithubUser } from "../services/githubService";
import { FaSpinner } from "react-icons/fa";

function Home() {
  const [data, setData] = useState(null);

  const [username, setUsername] =
    useState("");

  const handleSearch = async (
    searchUsername = username
  ) => {

    searchUsername =
      String(searchUsername);

    if (!searchUsername.trim()) {
      setError(
        "Please enter a GitHub username."
      );
      return;
    }
    try {
      setLoading(true);
      setError("");

      const result =
        await fetchGithubUser(searchUsername);

      setData(result);
            const updatedSearches = [
        searchUsername,
        ...recentSearches.filter(
          (item) =>
            item !== searchUsername
        ),
      ].slice(0, 5);

      setRecentSearches(updatedSearches);

      localStorage.setItem(
        "recentSearches",
        JSON.stringify(updatedSearches)
      );
    } catch (error) {
      setData(null);

      if (
        error.response?.status === 404
      ) {
        setError(
          "GitHub user not found."
        );
      } else {
        setError(
          "Something went wrong. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRecentSearch = (
  selectedUser
) => {
  console.log(
    "Recent clicked:",
    selectedUser
  );

  setUsername(selectedUser);

  handleSearch(selectedUser);

  setShowRecent(false);
};
    

  const [loading, setLoading] = useState(false);

  const [error, setError] =
  useState("");

  const [recentSearches, setRecentSearches] =
  useState([]);

  const [showRecent, setShowRecent] =
  useState(false);
  
  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "recentSearches"
        )
      ) || [];

    setRecentSearches(saved);
  }, []);


  return (
  <div>

    {
      error && (
        <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )
    }

    {
      loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="flex flex-col items-center gap-4">
            <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#020817] z-50">
            <FaSpinner className="animate-spin text-5xl text-green-500 mb-6" />

            <h2 className="text-2xl font-semibold text-white">
              Waking up the server...
            </h2>

            <p className="text-gray-400 mt-3 text-center max-w-md px-4">
              Our backend is hosted on Render's free tier and may need a few seconds
              to start after inactivity. Thanks for your patience.
            </p>
          </div>
          </div>
        </div>
      )
    }

    {/* Header */}

      {
        error && (
          <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )
      }


<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">

  <h1 className="text-[42px] font-bold whitespace-nowrap">
  GitHub Developer Dashboard
  </h1>

  <div className="flex gap-2 relative">
    <input
      type="text"
      placeholder="Search GitHub username..."
      value={username}
      onChange={(e) =>
        setUsername(e.target.value)
      }
      onFocus={() =>
        setShowRecent(true)
      }
      onBlur={() =>
        setTimeout(
          () => setShowRecent(false),
          250
        )
      }
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      }}
      className="
      bg-[#161b22]
      border border-[#30363d]
      text-white
      rounded-lg
      px-4 py-2
      w-80
      focus:outline-none
      focus:border-blue-500
      "/>
    {
      showRecent &&
      recentSearches.length > 0 && (
        <div className="absolute top-12 left-0 w-80 bg-[#161b22] border border-[#30363d] border rounded-lg shadow-lg z-50">
          
          <div className="px-4 py-2 text-xs text-gray-500 border-b">
            Recent Searches
          </div>

          {recentSearches.map((item) => (
            <button
              key={item}
              onClick={() =>
                handleRecentSearch(item)
              }
              className="block w-full text-left px-4 py-2 hover:bg-[#21262d]"
            >
              {item}
            </button>
          ))}
        </div>
      )
    }

    <button
      onClick={() => handleSearch()}
      disabled={loading}
      className="bg-[#238636] hover:bg-[#2ea043] text-white px-6 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50"
    >
      {loading ? (
        <>
          <FaSpinner className="animate-spin" />
          Loading...
        </>
      ) : (
        "Search"
      )}
    </button>
  </div>

</div>

      {!loading && !data && (
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl shadow-md p-12 text-center mt-8">
            <h2 className="text-2xl font-bold mb-2">
              Search a GitHub Developer
            </h2>

            <p className="text-gray-500">
              Enter a GitHub username above to view
              profile insights and repository analytics.
            </p>
          </div>
        )}

      {!loading && data && (
        <>
          <ProfileCard
            profile={data.profile}
          />

          <StatsCards
            profile={data.profile}
            repos={data.repos}
          />

          <DeveloperAnalytics
            repos={data.repos}
          />

          <RepoList
            repos={data.repos}
          />
        </>
      )}
    </div>
  );
}

export default Home;