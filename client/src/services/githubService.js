import axios from "axios";

const API_URL = "http://localhost:5000/api/github";

export const fetchGithubUser = async (username) => {
  const response = await axios.get(
    `${API_URL}/${username}`
  );

  return response.data;
};