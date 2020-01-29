import React from "react";
import { Provider } from "react-redux";
import { store } from "services/store";
import Layout from "components/Layout/Layout.js";
import CategoriesSection from "page-sections/home-sections/CategoriesSection.js";
import ArticlesSection from "page-sections/home-sections/ArticlesSection.js";

const Home = () => {
  return (
    <Provider store={store}>
      <Layout>
        <CategoriesSection />
        <ArticlesSection />
      </Layout>
    </Provider>
  );
};

export default Home;
