import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function DeveloperAnalytics({ repos }) {
  if (!repos?.length) return null;

  // Language count
  const languageCount = {};

  repos.forEach((repo) => {
    if (repo.language) {
      languageCount[repo.language] =
        (languageCount[repo.language] || 0) + 1;
    }
  });

  const chartData = Object.entries(
    languageCount
  ).map(([language, count]) => ({
    language,
    count,
  }));

  // Primary language
  const primaryLanguage =
    chartData.length > 0
      ? chartData.reduce((prev, current) =>
          current.count > prev.count
            ? current
            : prev
        ).language
      : "N/A";

  // Most starred repo
  const mostStarredRepo =
    repos.length > 0
      ? repos.reduce((prev, current) =>
          current.stars > prev.stars
            ? current
            : prev
        ).name
      : "N/A";

  const recentlyUpdatedRepo =
  repos.length > 0
    ? [...repos].sort(
        (a, b) =>
          new Date(b.updated_at) -
          new Date(a.updated_at)
      )[0].name
    : "N/A";

  const COLORS = [
    "#2563eb",
    "#7c3aed",
    "#059669",
    "#dc2626",
    "#ea580c",
    "#0891b2",
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* LEFT SIDE */}
        <div>

        <h2 className="text-xl font-bold mb-1">
            Developer Analytics
        </h2>

        <p className="text-gray-500 mb-4">
            Insights generated from public repositories
        </p>

        <div className="grid grid-cols-2 gap-4">

        <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-500">
            Primary Language
            </p>

            <p className="text-xl font-bold">
            {primaryLanguage}
            </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-500">
            Most Starred Repository
            </p>

            <p className="text-lg font-bold break-all">
            {mostStarredRepo}
            </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 col-span-2">
            <p className="text-sm text-gray-500">
            Recently Updated Repository
            </p>

            <p className="text-xl font-bold break-words">
            {recentlyUpdatedRepo}
            </p>
        </div>

</div>
    </div>    

        {/* RIGHT SIDE */}
        <div>

          <div className="h-72 -mt-6">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="count"
                  nameKey="language"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ language, percent }) =>
                    `${language} ${(
                      percent * 100
                    ).toFixed(0)}%`
                  }
                >
                  {chartData.map(
                    (_, index) => (
                      <Cell
                        key={index}
                        fill={
                          COLORS[
                            index %
                              COLORS.length
                          ]
                        }
                      />
                    )
                  )}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>


        </div>

      </div>
    </div>
  );
}

export default DeveloperAnalytics;