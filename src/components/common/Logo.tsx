import { MdNewspaper } from "react-icons/md";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex gap-1 items-center justify-center cursor-pointer"
    >
      <MdNewspaper className="text-2xl text-blue-600" />
      <p className="font-bold font-libre text-md text-gray-800">NewsToday</p>
    </Link>
  );
};

export default Logo;
