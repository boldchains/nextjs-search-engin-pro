import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useRouter, withRouter } from "next/router";

import Layout from "components/Layout/Layout.js";
import CategoriesSection from "page-sections/home-sections/CategoriesSection.js";
import ArticlesSection from "page-sections/home-sections/ArticlesSection.js";

import {
  setAllTags,
  clearArticles,
  setSearchKey,
  setLocation
} from "services/reducers/search/actions.js";

import {
  DEFAULT_COUNTRY_CODE,
  TAGS_API_URL,
  PHOTO_STATIC_URL,
  LOCATION_DETECT_API
} from "utils/Consts.js";

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const location = useSelector(state => state.searchStates.location);
  const countryCode =
    location && location.countryCode
      ? location.countryCode.toLowerCase()
      : DEFAULT_COUNTRY_CODE;

  useEffect(() => {
    const query = router.query;
    if (!query.l) {
      router.push({
        pathname: "/",
        query: {
          ...query,
          l: countryCode
        }
      });
    }

    dispatch(clearArticles());
    dispatch(setSearchKey(query.q ? query.q : ""));
  }, [router.query.q]);

  return (
    <Layout>
      <CategoriesSection />
      <ArticlesSection />
    </Layout>
  );
};

Index.getInitialProps = async function({ store }) {
  // fetch all tag list
  const resp = await fetch(TAGS_API_URL);
  const tags = await resp.json();

  tags.listtags = tags.listtags || [];
  const tagList = tags.listtags.map(item => {
    if (item.tag && item.tag.logo) item.logo = PHOTO_STATIC_URL + item.tag.logo;
    else {
      let find = item.list_tags.find(i => i.logo);
      if (find) {
        item.logo = PHOTO_STATIC_URL + find.logo;
      }
    }
    item.selected = false;
    return item;
  });

  store.dispatch(setAllTags(tagList));

  // fetch location data
  const locationResp = await fetch(LOCATION_DETECT_API);
  const location = await locationResp.json();

  store.dispatch(setLocation(location));
};

export default connect(state => state)(withRouter(Index));
