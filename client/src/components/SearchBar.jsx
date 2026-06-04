import { useState } from "react";

function SearchBar({ onSearch }) {
  const [username, setUsername] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    onSearch(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2"
    >
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
        className="border p-2 rounded w-full"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-black text-white rounded"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;