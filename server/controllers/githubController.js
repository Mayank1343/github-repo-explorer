const {
  fetchGithubUser,
} = require("../services/githubService");

const getGithubUser = async (
  req,
  res
) => {
  try {
    const username =
      req.params.username;

    const data =
      await fetchGithubUser(
        username
      );

    res.status(200).json(data);
  } catch (error) {
    if (
      error.response?.status ===
      404
    ) {
      return res
        .status(404)
        .json({
          message:
            "GitHub user not found",
        });
    }

    if (
      error.response?.status ===
      403
    ) {
      return res
        .status(403)
        .json({
          message:
            "GitHub rate limit exceeded",
        });
    }

    return res
      .status(500)
      .json({
        message:
          "Internal server error",
      });
  }
};

module.exports = {
  getGithubUser,
};