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

function useFetchArticles() {
  const articles = useSelector(state => state.searchStates.articles);
  const articlesPage = useSelector(state => state.searchStates.page);

  const [isFetching, setIsFetching] = useState(false);
  const [fetchable, setFetchable] = useState(true);

  const dispatch = useDispatch();

  async function fetchArticlesHandler(params) {
    setIsFetching(true);
    const fetchedData = await fetchArticles(params);
    setIsFetching(false);

    setFetchable(fetchedData.length === 20);
    dispatch(addArticles(fetchedData));
  }

  const router = useRouter();
  const { query } = router;
  const params = {
    page: articlesPage,
    query: query.q ? query.q : "",
    lang: query.l
  };

  useEffect(() => {
    fetchArticlesHandler(params);
  }, [router.query.q]);

  useEffect(() => {
    const isBottom = el => {
      return el.getBoundingClientRect().bottom <= window.innerHeight;
    };

    const handleScroll = e => {
      e.preventDefault();

      const wrappedElement = document.getElementById("gallery");
      if (fetchable && wrappedElement && isBottom(wrappedElement)) {
        fetchArticlesHandler(params);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

const useFilterTags = allTags => {
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
    searchHandler(searchKey);
  }, [searchKey, selectedATag]);

  return {
    data: tags,
    onSelect: onSelect
  };
};

const ArticlesSection = props => {
  const { allTags, articles, page, location } = props.searchStates;

  const classes = useStyles();
  const articleTags = useFilterTags(allTags ? [] : []);

  const showGallery = useShowGallery(false);
  const imageData = articles.map((item, index) => {
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
