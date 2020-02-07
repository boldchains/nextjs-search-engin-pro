import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, useRouter } from "next/router";

import Layout from "components/Layout/Layout.js";
import CategoriesSection from "page-sections/home-sections/CategoriesSection.js";
import ArticlesSection from "page-sections/home-sections/ArticlesSection.js";

import {
  getAllTags,
  clearArticles,
  addArticles,
  getImages,
  getVideos
} from "services/reducers/search/actions.js";

const Index = props => {
  const { query } = props.router;
  const { location } = props.searchStates;
  const router = useRouter();
  useEffect(() => {
    const lang = navigator.language.slice(0, 2);
    const language = query.l ? query.l : lang;
    router.push({
      pathname: "/",
      query: {
        ...query,
        l: language
      }
    });
  }, [location]);

  return (
    <Layout>
      <CategoriesSection {...props} />
      <ArticlesSection {...props} />
    </Layout>
  );
};

Index.getInitialProps = async function({ store, pathname, query }) {
  if (pathname !== "/") {
    return {};
  }

  const queryString = query.q ? query.q.trim().replace(" ", "+") : "";
  const params = {
    lang: query.l,
    query: queryString,
    ctag: query.ctag,
    page: 0
  };
  // fetch all tag list
  store.dispatch(getAllTags());

  // celar artilces action
  store.dispatch(clearArticles());

  // get images
  store.dispatch(getImages(params));

  // get Videos
  store.dispatch(getVideos(params));

  // get initial articles
  store.dispatch(addArticles(params));
};

export default connect(state => state, {
  clearArticles,
  addArticles,
  getImages
})(withRouter(Index));
