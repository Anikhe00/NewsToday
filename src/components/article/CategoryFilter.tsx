interface FilterProps {
  categories: string[];
  value: string;
  onChange: (category: string) => void;
}

const CategoryFilter = ({ categories, value, onChange }: FilterProps) => {
  return (
    <div className="flex flex-wrap gap-1 md:gap-2 lg:gap-2 items-center justify-start">
      {categories.map((cat: string) => (
        <button
          key={cat}
          className={
            cat === value
              ? "text-white px-3 lg:px-4 md:px-4 py-2 font-libre cursor-pointer bg-blue-500 rounded-full text-sm font-medium"
              : "text-gray-500 px-3 md:px-4 lg:px-4 py-2 font-libre cursor-pointer hover:text-blue-500 hover:bg-blue-100 rounded-full text-sm font-medium"
          }
          onClick={() => onChange(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
