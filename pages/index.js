import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, useRouter } from "next/router";

import Layout from "components/Layout/Layout.js";
// import CategoriesSection from "page-sections/home-sections/CategoriesSection.js";
import ArticlesSection from "page-sections/home-sections/ArticlesSection.js";

import {
  getLocation,
  getAllTags,
  clearArticles,
  addArticles
} from "services/reducers/search/actions.js";

const Index = props => {
  const { query } = props.router;
  const { location } = props.searchStates;
  const router = useRouter();
  useEffect(() => {
    router.push({
      pathname: "/",
      query: {
        ...query,
        l: query.l ? query.l : location
      }
    });
  }, []);

  return (
    <Layout>
      {/* <CategoriesSection /> */}
      <ArticlesSection {...props} />
    </Layout>
  );
};

Index.getInitialProps = async function({ store, pathname, query }) {
  if (pathname !== "/") {
    return {};
  }

  // fetch location data
  await store.dispatch(getLocation(query.l));

  // fetch all tag list
  await store.dispatch(getAllTags());

  // celar artilces action
  await store.dispatch(clearArticles());
  await store.dispatch(
    addArticles({
      lang: "en",
      page: 1,
      query: ""
    })
  );
};

export default connect(state => state, {
  getLocation,
  getAllTags,
  clearArticles,
  addArticles
})(withRouter(Index));
