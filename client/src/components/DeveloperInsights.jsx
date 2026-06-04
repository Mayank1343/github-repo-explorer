function DeveloperInsights({ repos }) {
  if (!repos?.length) return null;

  const mostStarredRepo = repos.reduce(
    (max, repo) =>
      repo.stars > max.stars ? repo : max,
    repos[0]
  );

  const languageCount = {};

  repos.forEach((repo) => {
    if (repo.language) {
      languageCount[repo.language] =
        (languageCount[repo.language] || 0) + 1;
    }
  });

  const primaryLanguage =
    Object.keys(languageCount).sort(
      (a, b) =>
        languageCount[b] -
        languageCount[a]
    )[0];

    const activeRepos = repos.filter(
    (repo) => repo.openIssues > 0
    ).length;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">
        Developer Insights
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <p className="text-gray-500">
            Primary Language
          </p>
          <p className="font-bold text-lg">
            {primaryLanguage || "N/A"}
          </p>
        </div>

        <div>
          <p className="text-gray-500">
            Most Starred Repo
          </p>
          <p className="font-bold text-lg">
            {mostStarredRepo.name}
          </p>
        </div>

        <div>
        <p className="text-gray-500">
            Active Repositories
        </p>
        <p className="font-bold text-lg">
            {activeRepos}
        </p>
        </div>
      </div>
    </div>
  );
}

export default DeveloperInsights;