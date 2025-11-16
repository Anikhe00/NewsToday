import Logo from "../common/Logo";
import NavigationData from "../../utils/NavigationData";
import NavLink from "../common/NavLink";

const Footer = () => {
  return (
    <footer className="flex flex-col px-6 md:px-8 lg:px-10 py-8 gap-4 w-full h-auto items-center justify-center bg-gray-50 border-t border-gray-100">
      <Logo />
      <nav className="flex flex-wrap gap-4 md:gap-5 lg:gap-5 items-center justify-center">
        {NavigationData.map((item) => (
          <NavLink key={item.name} to={item.href}>
            {item.name}
          </NavLink>
        ))}
      </nav>
      <p className="font-libre text-sm text-gray-600">
        &copy; 2025 NewsToday. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
