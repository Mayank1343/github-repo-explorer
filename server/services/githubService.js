const axios = require("axios");

const {
  getCachedData,
  setCachedData,
} = require("./cacheService");

const fetchGithubUser = async (
  username
) => {
  const cachedData =
    getCachedData(username);

  if (cachedData) {
    console.log("Serving from cache");

    return cachedData;
  }

  console.log("Fetching from GitHub API");

  const profileResponse =
    await axios.get(
      `https://api.github.com/users/${username}`
    );

  const reposResponse =
    await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

  const result = {
    profile: {
      login:
        profileResponse.data.login,
      name:
        profileResponse.data.name,
      avatar:
        profileResponse.data.avatar_url,
      bio:
        profileResponse.data.bio,
      followers:
        profileResponse.data.followers,
      following:
        profileResponse.data.following,
      publicRepos:
        profileResponse.data.public_repos,
    },

    repos: reposResponse.data.map(
      (repo) => ({
        id: repo.id,
        name: repo.name,
        description:
          repo.description,
        stars:
          repo.stargazers_count,
        language:
          repo.language,
        updatedAt:
          repo.updated_at,
        openIssues:
          repo.open_issues_count,
        defaultBranch:
          repo.default_branch,
        repoUrl:
          repo.html_url,
      })
    ),
  };

  setCachedData(username, result);

  return result;
};

module.exports = {
  fetchGithubUser,
};