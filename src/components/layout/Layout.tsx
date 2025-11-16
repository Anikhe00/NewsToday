import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-dvh h-auto bg-gray-50 w-full flex flex-col items-start justify-start">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-start min-h-full w-full px-5 md:px-8 lg:px-45 py-8 md:py-10 lg:py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
