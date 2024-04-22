import axios from "axios";

export const baseFetcher = async (url: string) => {
  const ACCESS_TOKEN = localStorage.getItem("SPOTIFY_ACCESS_TOKEN");
  const response = axios.get(url, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
  });
  return response;
};
