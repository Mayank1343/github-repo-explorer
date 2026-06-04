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
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="text-sm text-gray-500">
          Repositories
        </h3>
        <p className="text-2xl font-bold">
          {profile.publicRepos}
        </p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="text-sm text-gray-500">
          Followers
        </h3>
        <p className="text-2xl font-bold">
          {profile.followers}
        </p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="text-sm text-gray-500">
          Total Stars
        </h3>
        <p className="text-2xl font-bold">
          {totalStars}
        </p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
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