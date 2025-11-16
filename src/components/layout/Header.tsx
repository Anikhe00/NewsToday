import Logo from "../common/Logo";
import NavLink from "../common/NavLink";
import Search from "../common/Search";
import NavigationData from "../../utils/NavigationData";
import { CgMenuLeftAlt } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleGlobalSearch = (value: string) => {
    if (value.trim().length >= 3) {
      // Navigate to Home with query param
      navigate(`/?q=${encodeURIComponent(value.trim())}`);
    } else if (value.trim() === "") {
      navigate("/");
    }
  };

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 z-50 flex px-5 md:px-8 lg:px-10 py-4 w-full h-auto items-center justify-space-between bg-gray-50 border-b border-gray-200">
        {/* Logo and Nav Links */}
        <div className="flex gap-6 w-full h-auto items-center justify-start">
          <Logo />
          <nav className="hidden lg:flex gap-5 items-center justify-center">
            {NavigationData.map((item) => (
              <NavLink key={item.name} to={item.href}>
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Search and Notification */}
        <div className="hidden w-[480px] h-auto lg:flex items-center justify-center gap-4 ">
          <Search placeholder="Search" />
          {/* Avatar */}
        </div>

        {/* Mobile and Tablet Menu Button */}
        <div className="lg:hidden flex items-center justify-center">
          <CgMenuLeftAlt
            className="text-2xl text-gray-600"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </header>

      {isMenuOpen && (
        <aside
          className="fixed backdrop-blur-sm transition-opacity duration-300 inset-0 bg-black/70 z-50 flex justify-end"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`absolute top-0 right-0 h-full w-11/12 bg-white shadow-xl flex flex-col gap-6
        transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* Logo and Close Button */}
            <div
              className="flex gap-6 py-4 items-center justify-between px-5 md:px-8 border-b border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Logo />
              <div className="lg:hidden flex items-center justify-center">
                <CgClose
                  className="text-2xl text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {/* Search */}
              <div className="px-5 md:px-8">
                <Search
                  placeholder="Search"
                  onSearch={handleGlobalSearch}
                  className="h-12 bg-gray-100"
                />
              </div>

              {/* Links */}
              <nav className="flex flex-col px-5 md:px-8 items-start justify-center">
                {NavigationData.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className="px-3 py-4 text-base"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Header;
