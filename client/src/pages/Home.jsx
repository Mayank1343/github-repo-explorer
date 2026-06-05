import { useEffect, useState } from "react";

import ProfileCard from "../components/ProfileCard";
import StatsCards from "../components/StatsCards";
import RepoList from "../components/RepoList";
import DeveloperAnalytics from "../components/DeveloperAnalytics";

import { fetchGithubUser } from "../services/githubService";

function Home() {
  const [data, setData] = useState(null);

  const [username, setUsername] =
    useState("torvalds");

  const handleSearch = async () => {
    try {
      const result =
        await fetchGithubUser(username);

      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div>

      {/* Header */}

<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">

  <h1 className="text-[42px] font-bold whitespace-nowrap">
  GitHub Developer Dashboard
  </h1>

  <div className="flex gap-2">
    <input
      type="text"
      placeholder="Search GitHub username..."
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className="border rounded-lg px-4 py-2 w-80"
    />

    <button
      onClick={handleSearch}
      className="bg-black text-white px-6 py-2 rounded-lg"
    >
      Search
    </button>
  </div>

</div>

      {data && (
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