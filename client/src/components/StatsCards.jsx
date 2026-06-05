function StatsCards({ profile, repos }) {
  if (!profile || !repos) return null;

  const languages = new Set(
    repos
      .map((repo) => repo.language)
      .filter(Boolean)
  );

  const totalStars = repos.reduce(
    (sum, repo) => sum + repo.stars,
    0
  );
  

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-xl shadow">
        <h3 className="text-sm text-gray-500">
            Owned Repositories
        </h3>

        <p className="text-2xl font-bold">
            {
            repos.filter(
                (repo) => !repo.fork
            ).length
            }
        </p>
        </div>

      <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-xl shadow">
        <h3 className="text-sm text-gray-500">
            Total Forks
        </h3>

        <p className="text-2xl font-bold">
            {
            repos.reduce(
                (sum, repo) =>
                sum + repo.forks,
                0
            )
            }
        </p>
        </div>

      <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-xl shadow">
        <h3 className="text-sm text-gray-500">
          Total Stars
        </h3>
        <p className="text-2xl font-bold">
          {totalStars}
        </p>
      </div>

      <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-xl shadow">
        <h3 className="text-sm text-gray-500">
          Languages
        </h3>
        <p className="text-2xl font-bold">
          {languages.size}
        </p>
      </div>
    </div>
  );
}

export default StatsCards;