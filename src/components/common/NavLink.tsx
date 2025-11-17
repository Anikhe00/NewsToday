import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import type { ReactNode } from "react";

type NavLinkProps = {
  to?: string;
  children: ReactNode;
  className?: string;
  noActive?: boolean;
};

const NavLink = ({ to, children, className, noActive }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to && !noActive;

  const generalClass =
    "text-sm font-libre font-medium transition-colors duration-200";

  const activeClass = "text-blue-500 ";

  const inactiveClass = "text-gray-500 hover:text-blue-500";

  const allClasses = classNames(
    generalClass,
    isActive ? activeClass : inactiveClass,
    className
  );

  return (
    <Link to={to || "/"} className={allClasses}>
      {children}
    </Link>
  );
};

export default NavLink;
