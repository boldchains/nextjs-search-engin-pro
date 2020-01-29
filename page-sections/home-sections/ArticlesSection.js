import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addArticles,
  setArticleTags
} from "services/reducers/search/actions.js";

import { makeStyles } from "@material-ui/core";
import Card from "components/Card/Card.js";
import ArticleCard from "components/ArticleCard/ArticleCard.js";
import Tags, { fetchTags } from "components/Tags/Tags.js";

import Gallery from "react-photo-gallery";
import styles from "assets/jss/page-sections/home-sections/articlesSectionStyle.js";

import { CORS_PROXY_URL, ARTICLES_API_URL } from "utils/Consts.js";

const useStyles = makeStyles(styles);

async function fetchArticles(params) {
  let url = `${ARTICLES_API_URL}?l=${params.lang}&page=${params.page}`;
  if (params.query && params.query !== "") {
    url = url + `&q=${params.query}`;
  }

  const response = await fetch(CORS_PROXY_URL + url);
  const jsonResponse = await response.json();
  return jsonResponse.articles;
}

function useFetchArticles() {
  const articles = useSelector(state => state.searchStates.articles);
  const articlesPage = useSelector(state => state.searchStates.page);
  const searchKey = useSelector(state => state.searchStates.searchKey);
  const dispatch = useDispatch();

  const [isFetching, setIsFetching] = useState(true);
  const lang = useSelector(state => state.searchStates.lang);

  async function fetchArticlesHandler() {
    setIsFetching(true);
    const fetchedData = await fetchArticles({
      page: articlesPage,
      query: searchKey,
      lang: lang
    });
    setIsFetching(false);

    fetchedData && dispatch(addArticles(fetchedData));
  }

  useEffect(() => {
    const isBottom = el => {
      return el.getBoundingClientRect().bottom <= window.innerHeight;
    };

    const handleScroll = e => {
      e.preventDefault();

      const wrappedElement = document.getElementById("gallery");
      if (wrappedElement && isBottom(wrappedElement)) {
        fetchArticlesHandler();
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [articles]);

  useEffect(() => {
    fetchArticlesHandler();
  }, [searchKey]);

  return {
    data: articles,
    page: articlesPage,
    isFetching: isFetching
  };
}

function useShowGallery(initialState) {
  const [showGallery, setShowGalley] = useState(initialState);

  useEffect(() => {
    setShowGalley(true);
  }, []);

  return showGallery;
}

const useFetchTags = () => {
  const tags = useSelector(state => state.searchStates.articleTags);
  const [isFetching, setIsFetching] = useState(false);

  const dispatch = useDispatch();

  const fetchHandler = async () => {
    setIsFetching(false);
    const fetchedData = await fetchTags();
    fetchedData.unshift({ _id: "All", selected: true });
    setIsFetching(true);

    dispatch(setArticleTags(fetchedData));
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return {
    data: tags,
    isFetching: isFetching
  };
};

const TotalSection = () => {
  const classes = useStyles();

  const articleTags = useFetchTags();
  const articles = useFetchArticles();
  const showGallery = useShowGallery(false);

  const imageData = articles.data.map((item, index) => {
    return {
      key: (articles.page * 20 + index).toString(),
      src: item.image.url ? item.image.url : "",
      state: articles.isFetching,
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

export default TotalSection;
