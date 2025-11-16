import { HiOutlineSearch } from "react-icons/hi";
import classNames from "classnames";
import { useState, useMemo, useEffect } from "react";
import debounce from "lodash.debounce";
import { useNavigate, useLocation } from "react-router-dom";

interface SearchProps {
  placeholder: string;
  className?: string;
  minLength?: number;
  onSearch?: (value: string) => void;
}

const Search = ({ placeholder, className, minLength = 3 }: SearchProps) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const searchClassName = classNames(
    "flex gap-2 items-center justify-start w-full px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2",
    className ?? "h-10 bg-gray-100"
  );

  // Debounced URL update
  const debouncedSearch = useMemo(
    () =>
      debounce((query: string) => {
        const trimmed = query.trim();
        const params = new URLSearchParams(location.search);

        if (trimmed.length >= minLength) {
          params.set("q", trimmed);
        } else {
          params.delete("q");
        }

        navigate(`${location.pathname}?${params.toString()}`, {
          replace: true,
        });
      }, 400),
    [navigate, location.pathname, location.search, minLength]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setValue(query);
    debouncedSearch(query);
  };

  // Clean up debounce on unmount
  useEffect(() => {
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);

  return (
    <div className={searchClassName}>
      <HiOutlineSearch className="w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full font-libre text-sm placeholder:text-sm placeholder:text-gray-400 text-gray-800 focus:outline-none"
      />
    </div>
  );
};

export default Search;
