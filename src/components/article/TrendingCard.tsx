import type { Article } from "../../interfaces";
import Button from "../common/Button";

const TrendingCard = ({
  article,
  onClick,
}: {
  article: Article;
  onClick: () => void;
}) => {
  return (
    <article
      className="relative flex flex-col p-5 lg:py-8 lg:pl-8 lg:pr-16 items-start justify-end w-full h-90 md:h-140 lg:h-140 bg-blue-50 bg-cover bg-center bg-no-repeat rounded-xl"
      style={{
        backgroundImage: `url(${article.image_url})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70 rounded-xl"></div>

      <div className="flex z-10 relative flex-col gap-3 md:gap-4 lg:gap-4 items-start justify-end">
        <h1 className="lg:text-[42px] md:text-3xl text-xl leading-[120%] font-libre font-bold text-white">
          {article.title}
        </h1>
        <p className="lg:text-md md:text-sm text-xs font-libre font-normal text-white/90 line-clamp-2">
          {article.description}
        </p>
        <Button
          onClick={onClick}
          className="bg-blue-500 text-white hover:bg-blue-600 px-4 lg:px-6 py-3 "
        >
          Read More
        </Button>
      </div>
    </article>
  );
};

export default TrendingCard;
