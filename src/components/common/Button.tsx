import classNames from "classnames";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  const generalClass =
    "inline-flex items-center px-4 py-2 font-libre text-sm font-semibold rounded-md focus:outline-none focus:ring-2 cursor-pointer focus:ring-offset-2";
  const allClasses = classNames(generalClass, className);

  return (
    <button
      className={
        className
          ? allClasses
          : "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-libre font-semibold rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
      }
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
