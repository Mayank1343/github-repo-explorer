import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { fetchGithubUser } from "../services/githubService";

function Home() {
  const [data, setData] =
    useState(null);

  const handleSearch = async (
    username
  ) => {
    try {
      const result =
        await fetchGithubUser(
          username
        );

      setData(result);

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        GitHub Profile Analytics
      </h1>

      <SearchBar
        onSearch={handleSearch}
      />
    </div>
  );
}

export default Home;