import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetch from "isomorphic-unfetch";
import {
  addArticles,
  setArticleTags,
  setArticleTag
} from "services/reducers/search/actions.js";

import { makeStyles } from "@material-ui/core";
import Card from "components/Card/Card.js";
import ArticleCard from "components/ArticleCard/ArticleCard.js";
import Tags from "components/Tags/Tags.js";

import Gallery from "react-photo-gallery";
import styles from "assets/jss/page-sections/home-sections/articlesSectionStyle.js";

import { CORS_PROXY_URL, ARTICLES_API_URL } from "utils/Consts.js";

const useStyles = makeStyles(styles);

async function fetchArticles(params) {
  let url = `${ARTICLES_API_URL}?l=${params.lang}&page=${params.page}&q=${params.query}`;

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
    console.log(
      "calling from articles section when change searchkey!",
      searchKey
    );
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
  const allTags = useSelector(state => state.searchStates.allTags);
  const selectedATag = useSelector(state => state.searchStates.selectedATag);
  const tags = useSelector(state => state.searchStates.articleTags);
  const searchKey = useSelector(state => state.searchStates.searchKey);

  const dispatch = useDispatch();

  const searchHandler = () => {
    const filteredList = allTags.filter(function(item) {
      return item._id.toLowerCase().indexOf(searchKey.toLowerCase()) >= 0;
    });
    const tagList = allTags ? filteredList : [];
    dispatch(setArticleTags(tagList));
  };

  const onSelect = index => {
    const clonedTags = [...tags];
    clonedTags &&
      clonedTags.map((item, idx) => {
        item.selected = idx === index;
      });

    const selectedTag = clonedTags[index];
    if (selectedTag && selectedTag._id !== "All") {
      dispatch(setArticleTag(selectedTag._id));
    }

    clonedTags.shift();
    dispatch(setArticleTags(clonedTags));
  };

  useEffect(() => {
    searchKey && searchKey !== "" && searchHandler();
  }, [searchKey, selectedATag]);

  return {
    data: tags,
    onSelect: onSelect
  };
};

const TotalSection = () => {
  const classes = useStyles();

  const articleTags = useFetchTags();
  const articles = useFetchArticles();
  const showGallery = useShowGallery(false);

  const fakeData = Array.from(new Array(20)).map(item => {
    return {};
  });
  const renderableData = articles.isFetching
    ? [...articles.data, ...fakeData]
    : articles.data;

  const imageData = renderableData.map((item, index) => {
    return {
      key: (articles.page * 20 + index).toString(),
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

TotalSection.getInitialProps = async function(context) {};

export default TotalSection;
