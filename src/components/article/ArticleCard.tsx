import type { Article } from "../../interfaces";

const ArticleCard = ({ article }: { article: Article }) => {
  const placeholder = "https://via.placeholder.com/300x200.png?text=No+Image";

  return (
    <article className="group w-full flex flex-row gap-3 cursor-pointer overflow-hidden items-center">
      <div className="flex-1 flex flex-col gap-2 overflow-hidden">
        <p className="text-xs font-libre font-semibold text-blue-500">
          {article.category}
        </p>
        <p className="group-hover:underline text-[15px] font-libre font-bold text-gray-800">
          {article.title}
        </p>
        <p className="text-sm font-libre line-clamp-2 text-gray-500">
          {article.description}
        </p>
      </div>
      <div className="w-30 h-30 shrink-0 overflow-hidden rounded-md">
        <img
          className="w-full h-full object-cover"
          src={article.imgUrl || placeholder}
          alt={article.title}
        />
      </div>
    </article>
  );
};

export default ArticleCard;
