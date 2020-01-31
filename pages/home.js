import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, withRouter } from "next/router";
import {
  setAllTags,
  setSearchKey,
  clearArticles
} from "services/reducers/search/actions.js";

import Layout from "components/Layout/Layout.js";
import CategoriesSection from "page-sections/home-sections/CategoriesSection.js";
import ArticlesSection from "page-sections/home-sections/ArticlesSection.js";

import {
  CORS_PROXY_URL,
  TAGS_API_URL,
  PHOTO_STATIC_URL
} from "utils/Consts.js";

const fetchTags = async () => {
  const resp = await fetch(CORS_PROXY_URL + TAGS_API_URL);
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

  return tagList;
};

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchKey = useSelector(state => state.searchStates.searchKey);
  const lang = useSelector(state => state.searchStates.lang);

  const fetchHandler = async () => {
    const fetchedData = await fetchTags();
    dispatch(setAllTags(fetchedData));
  };

  useEffect(() => {
    console.log(
      "calling from home page when change router!",
      router.query.q + " : " + searchKey
    );
    const query = router.query;
    if (!query.l) {
      router.push({
        pathname: "/",
        query: {
          ...query,
          l: lang
        }
      });
    }

    dispatch(setSearchKey(router.query.q));
    dispatch(clearArticles());

    fetchHandler();
  }, [router.query.q]);

  return (
    <Layout>
      <CategoriesSection />
      <ArticlesSection />
    </Layout>
  );
};

export default withRouter(Home);
