import { useQuery, keepPreviousData } from "@tanstack/react-query";
import CategoryFilter from "../components/article/CategoryFilter";
import Search from "../components/common/Search";
import NewsCard from "../components/article/NewsCard";
import TrendingCard from "../components/article/TrendingCard";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchArticles } from "../api/fetchArticles";
import type { Article } from "../interfaces";

const categories = [
  "world",
  "business",
  "education",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

const Home = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchQuery = searchParams.get("q") || "";
  const [category, setCategory] = useState<string>("world");

  // Fetch articles with react-query
  const {
    data: articles = [],
    isLoading,
    isError,
  } = useQuery<Article[], Error>({
    queryKey: ["articles", category, searchQuery],
    queryFn: () => fetchArticles(category, searchQuery),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });

  // Handle search input (updates URL)
  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query.trim().length >= 3) params.set("q", query);
    else params.delete("q");

    navigate({ pathname: "/", search: params.toString() }, { replace: true });
  };

  // Trending and other articles
  const trendingArticle = articles.find((a) => a.image_url);
  const newsArticles = articles.filter((a) => a !== trendingArticle);

  return (
    <div className="w-full h-auto flex flex-col gap-6 md:gap-8 lg:gap-8 items-start justify-start">
      {/* Search */}
      <Search
        placeholder="Search for news, topics..."
        className="h-12 md:h-12 lg:h-13 border border-gray-200 bg-white"
        onSearch={handleSearch}
      />

      {/* Categories */}
      <CategoryFilter
        categories={categories}
        value={category}
        onChange={setCategory}
      />

      {/* Content */}
      {isLoading ? (
        <p className="h-dvh text-gray-500 font-libre text-sm">Loading...</p>
      ) : isError ? (
        <p className="h-dvh text-red-500 font-libre text-sm">
          Failed to load articles
        </p>
      ) : articles.length === 0 ? (
        <p className="h-dvh text-gray-500 font-libre text-sm">
          No articles found.
        </p>
      ) : (
        <>
          {trendingArticle && (
            <Link
              to={`/article/${encodeURIComponent(trendingArticle.link)}`}
              state={{ article: trendingArticle, articles }}
            >
              <TrendingCard article={trendingArticle} onClick={() => {}} />
            </Link>
          )}

          <div className="w-full h-auto flex flex-col gap-6 items-start justify-start">
            <h2 className="lg:text-2xl md:text-xl text-lg font-libre font-bold text-gray-800">
              Recent Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
              {newsArticles.map((article) => (
                <Link
                  key={article.article_id}
                  to={`/article/${encodeURIComponent(article.link)}`}
                  state={{ article, articles }}
                >
                  <NewsCard article={article} />
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
