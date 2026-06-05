import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL;

export const fetchGithubUser = async (
  username
) => {
  const response = await axios.get(
    `${API_URL}/${username}`
  );
  return response.data;
};