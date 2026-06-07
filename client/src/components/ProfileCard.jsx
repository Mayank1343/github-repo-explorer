function ProfileCard({ profile }) {
  if (!profile) return null;

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl shadow-md p-4 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
      <img
        src={profile.avatar}
        alt={profile.name}
        className="w-28 h-28 rounded-full"
      />

      <div>
        <h2 className="text-2xl font-bold">
          {profile.name || profile.login}
        </h2>

        <p className="text-gray-400 mt-2">
          {profile.bio || "No bio available"}
        </p>

        <div className="
          flex
          justify-center
          sm:justify-start
          gap-6
          mt-4
          flex-wrap
        ">
          <div>
            <span className="font-bold">
              {profile.followers}
            </span>
            <p className="text-sm text-gray-500">
              Followers
            </p>
          </div>

          <div>
            <span className="font-bold">
              {profile.following}
            </span>
            <p className="text-sm text-gray-500">
              Following
            </p>
          </div>

          <div>
            <span className="font-bold">
              {profile.publicRepos}
            </span>
            <p className="text-sm text-gray-500">
              Repositories
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;