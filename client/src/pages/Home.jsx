import { useState } from "react";

import SearchBar from "../components/SearchBar";
import ProfileCard from "../components/ProfileCard";
import StatsCards from "../components/StatsCards";

import { fetchGithubUser } from "../services/githubService";

function Home() {
  const [data, setData] = useState(null);

  const handleSearch = async (username) => {
    try {
      const result =
        await fetchGithubUser(username);

      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        GitHub Developer Insights
      </h1>

      <SearchBar onSearch={handleSearch} />

      {data && (
        <>
          <div className="mt-8">
            <ProfileCard
              profile={data.profile}
            />
          </div>

          <StatsCards
            profile={data.profile}
            repos={data.repos}
          />
        </>
      )}
    </div>
  );
}

export default Home;