import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, useRouter } from "next/router";
import fetch from "isomorphic-fetch";

import Layout from "components/Layout/Layout.js";
import CategoriesSection from "page-sections/home-sections/CategoriesSection.js";
import ArticlesSection from "page-sections/home-sections/ArticlesSection.js";

import {
  setLocation,
  setAllTags,
  clearArticles,
  addArticles
} from "services/reducers/search/actions.js";

import {
  TAGS_API_URL,
  LOCATION_DETECT_API,
  CORS_PROXY_URL,
  DEFAULT_COUNTRY_CODE,
  ARTICLES_API_URL
} from "utils/Consts.js";

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

Index.getInitialProps = async function({ store, isServer, pathname, query }) {
  if (pathname !== "/") {
    return {};
  }

  // fetch location data
  const locationResp = await fetch(LOCATION_DETECT_API);
  const location = await locationResp.json();
  const userLocation = location.countryCode
    ? location.countryCode.toLowerCase()
    : DEFAULT_COUNTRY_CODE;
  const browserLocation = query.l ? query.l : userLocation;

  store.dispatch(setLocation(browserLocation));

  // fetch all tag list
  const resp = await fetch(
    !isServer ? CORS_PROXY_URL + TAGS_API_URL : TAGS_API_URL
  );
  const tags = await resp.json();
  store.dispatch(setAllTags(tags.type === "success" && tags.listtags));

  // celar artilces action
  store.dispatch(clearArticles());

  // get initial acticles
  const keyword = query.q ? query.q : "";
  const initArticlesResp = await fetch(
    `${
      !isServer ? CORS_PROXY_URL + ARTICLES_API_URL : ARTICLES_API_URL
    }?l=${browserLocation}&page=1&q=${keyword}`
  );
  const response = await initArticlesResp.json();

  store.dispatch(addArticles(response.articles));
};

export default connect(state => state)(withRouter(Index));
