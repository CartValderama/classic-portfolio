import axios from "axios";

export const fetchPublicRepos = async () => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/CartValderama/starred`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
};
