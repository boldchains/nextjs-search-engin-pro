import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useRouter, withRouter } from "next/router";

import Layout from "components/Layout/Layout.js";
import CategoriesSection from "page-sections/home-sections/CategoriesSection.js";
import ArticlesSection from "page-sections/home-sections/ArticlesSection.js";

import { setLocation, setAllTags } from "services/reducers/search/actions.js";
import { DEFAULT_COUNTRY_CODE } from "utils/Consts.js";

import {
  TAGS_API_URL,
  LOCATION_DETECT_API,
  CORS_PROXY_URL
} from "utils/Consts.js";

const Index = props => {
  console.log("index, props:", props);

  return (
    <Layout>
      {/* <CategoriesSection /> */}
      <ArticlesSection props={props.searchStates} />
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

  store.dispatch(setLocation(query.l ? query.l : userLocation));

  // fetch all tag list
  const resp = await fetch(
    !isServer ? CORS_PROXY_URL + TAGS_API_URL : TAGS_API_URL
  );
  const tags = await resp.json();
  store.dispatch(setAllTags(tags.type === "success" && tags.listtags));

  // async add get articles action
  const getArticles = params => {
    return fetch(`${ARTICLES_API_URL}`, {
      query: params
    });
  };

  return {
    getArticlesHandler: getArticles
  };
};

export default connect(state => state)(withRouter(Index));
