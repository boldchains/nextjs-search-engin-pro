import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetch from "isomorphic-unfetch";
import {
  addArticles,
  setArticleTag
} from "services/reducers/search/actions.js";

import { makeStyles } from "@material-ui/core";
import Card from "components/Card/Card.js";
import ArticleCard from "components/ArticleCard/ArticleCard.js";
import Tags from "components/Tags/Tags.js";

import Gallery from "react-photo-gallery";
import styles from "assets/jss/page-sections/home-sections/articlesSectionStyle.js";

import {
  CORS_PROXY_URL,
  ARTICLES_API_URL,
  ARTICLES_LIMIT
} from "utils/Consts.js";
import { useRouter } from "next/router";

const useStyles = makeStyles(styles);

async function fetchArticles(params) {
  let url = `${ARTICLES_API_URL}?l=${params.lang}&page=${params.page}&q=${params.query}`;

  const response = await fetch(CORS_PROXY_URL + url);
  const jsonResponse = await response.json();
  return jsonResponse.articles;
}

function useFetchArticles(params) {
  useEffect(() => {
    const isBottom = el => {
      return el.getBoundingClientRect().bottom <= window.innerHeight;
    };

    const handleScroll = e => {
      e.preventDefault();
      const wrappedElement = document.getElementById("gallery");
      if (wrappedElement && isBottom(wrappedElement)) {
        params.handler(params.query);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {};
}

function useShowGallery(initialState) {
  const [showGallery, setShowGalley] = useState(initialState);

  useEffect(() => {
    setShowGalley(true);
  }, []);

  return showGallery;
}

const useFilterTags = allTags => {
  const tags = useSelector(state => state.searchStates.articleTags);
  const dispatch = useDispatch();

  const searchHandler = () => {
    const filteredList = allTags.filter(function(item) {
      return item._id.toLowerCase().indexOf(searchKey.toLowerCase()) >= 0;
    });
    const tagList = allTags ? filteredList : [];
  };

  const onSelect = index => {};

  useEffect(() => {}, []);

  return {
    data: allTags.slice(0, 20),
    onSelect: onSelect
  };
};

const ArticlesSection = props => {
  const classes = useStyles();

  const initStates = props.searchStates;
  const page = initStates.page;

  const articleTags = useFilterTags(initStates.allTags);
  const articlesFetcher = useFetchArticles({
    handler: props.addArticles,
    query: {
      page: initStates.page,
      query: initStates.searchKey,
      lang: initStates.location
    }
  });

  const showGallery = useShowGallery(false);
  const articlesData = initStates.articles;
  const imageData = articlesData.map((item, index) => {
    return {
      key: (page * ARTICLES_LIMIT + index).toString(),
      src: item.image && item.image.url ? item.image.url : "",
      photo: item,
      width: 4,
      height: 3
    };
  });

  return (
    <Card className={classes.boxedCard}>
      <Tags tags={articleTags} />
      {
        <div id="gallery">
          {showGallery && (
            <Gallery
              photos={imageData}
              columns={200}
              renderImage={ArticleCard}
              margin={3}
            />
          )}
        </div>
      }
    </Card>
  );
};

export default ArticlesSection;
