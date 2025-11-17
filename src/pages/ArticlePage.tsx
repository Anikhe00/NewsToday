import ArticleContent from "../components/article/ArticleContent";
import ArticleCard from "../components/article/ArticleCard";
import { useLocation } from "react-router-dom";
import type { Article } from "../interfaces";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ArticlePage = () => {
  const location = useLocation();
  const article = location.state?.article as Article | null;
  let articles = location.state?.articles as Article[] | null;

  if (!article) {
    articles = [];
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [article]);

  const otherArticles =
    articles?.filter((a) => a.article_id !== article?.article_id) || [];

  let relatedArticles = otherArticles.filter(
    (a) =>
      a.category?.[0]?.toLowerCase() === article?.category?.[0]?.toLowerCase()
  );

  if (relatedArticles.length === 0) {
    relatedArticles = otherArticles.slice(0, 2);
  } else {
    relatedArticles = relatedArticles.slice(0, 2);
  }

  return (
    <div className="max-w-[1200px] w-full h-auto flex flex-col gap-8 items-start justify-start">
      {article && <ArticleContent article={article} />}

      {/* Related Articles */}
      {article && (
        <div className="w-full h-auto flex flex-col gap-8 items-start justify-start">
          <h2 className="lg:text-2xl md:text-xl text-lg font-libre font-bold text-gray-800">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {relatedArticles.map((a) => (
              <Link
                to={`/article/${encodeURIComponent(a.link)}`}
                state={{ article: a, articles }}
                key={a.article_id}
              >
                <ArticleCard article={a} key={a.article_id} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
