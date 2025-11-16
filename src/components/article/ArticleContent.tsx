import type { Article } from "../../interfaces";
import { Link } from "react-router-dom";

const ArticleContent = ({ article }: { article: Article }) => {
  return (
    <div className="w-full h-full flex flex-col gap-8 items-center justify-start">
      {/* Article Title */}
      <div className="w-full flex flex-col gap-4 items-start justify-start">
        <div className="w-full text-sm font-libre text-gray-500 flex flex-row gap-2 items-center justify-start">
          <Link to="/">
            <span className="hover:text-blue-500 cursor-pointer">News</span>
          </Link>
          <span>/</span>
          <span>{article.category}</span>
        </div>
        <h1 className="lg:text-6xl md:text-5xl text-3xl leading-[120%] font-libre font-bold text-gray-800">
          {article.title}
        </h1>
        <p className="text-gray-600 font-libre text-sm font-medium">
          By {article.author} Published on{" "}
          {new Date(article.pubDate).toLocaleDateString()}
        </p>
      </div>

      {/* Article Image */}
      <div className="w-full h-auto">
        {article.imgUrl ? (
          <img
            src={article.imgUrl}
            alt={article.title}
            className="w-full h-70 md:h-90 lg:h-120 object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-70 md:h-90 lg:h-120 flex bg-blue-500 rounded-md"></div>
        )}
      </div>

      {/* Article Content */}
      <div>
        <p className="text-sm leading-[160%] font-libre text-gray-600">
          {article.description || "No content available."}
        </p>
      </div>
    </div>
  );
};

export default ArticleContent;
