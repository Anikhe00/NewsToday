import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import type { Article } from "../interfaces";
import { fetchArticles } from "../api/fetchArticles";
import NewsCard from "../components/article/NewsCard";

const Category = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  const {
    data: articles = [],
    isLoading,
    isError,
  } = useQuery<Article[]>({
    queryKey: ["category", categoryName],
    queryFn: () => fetchArticles(categoryName || "general"),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="w-full h-auto flex flex-col gap-6 md:gap-8 lg:gap-8 items-start justify-start">
      <h1 className="text-3xl font-libre font-bold text-gray-800 capitalize">
        {categoryName} News
      </h1>

      {isLoading ? (
        <p className="text-gray-500 font-libre">Loading...</p>
      ) : isError ? (
        <p className="text-red-500 font-libre">Failed to load articles</p>
      ) : articles.length === 0 ? (
        <p className="text-gray-500 font-libre">No articles found.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/article/${encodeURIComponent(article.link)}`}
              state={{ article, articles }}
            >
              <NewsCard article={article} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
