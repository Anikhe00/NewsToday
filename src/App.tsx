import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import Category from "./pages/CategoryPage";

import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/category/:categoryName"
        element={
          <Layout>
            <Category />
          </Layout>
        }
      />
      <Route
        path="/article/:slug"
        element={
          <Layout>
            <ArticlePage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
