import type { Article } from "../interfaces";

const API_KEY = import.meta.env.VITE_API_KEY;

const API_URL = "https://newsdata.io/api/1";

export const fetchArticles = async (
  category?: string,
  searchQuery?: string
): Promise<Article[]> => {
  let url: string = "";

  if (searchQuery && searchQuery.trim().length >= 3) {
    url = `${API_URL}/latest?apikey=${API_KEY}&q=${encodeURIComponent(
      searchQuery
    )}&country=ng,gb,us,ps,se&language=en&removeduplicate=1`;
  } else {
    url = `${API_URL}/latest?apikey=${API_KEY}&country=ng,gb,us,ps,se&language=en&category=${category}&removeduplicate=1`;
  }

  const res = await fetch(url);
  const data = await res.json();

  if (data.status !== "success")
    throw new Error(data.message || "Failed to fetch articles");

  return data.results;
};
