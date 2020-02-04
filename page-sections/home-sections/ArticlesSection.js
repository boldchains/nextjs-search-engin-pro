import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core";
import Card from "components/Card/Card.js";
import ArticleCard from "components/ArticleCard/ArticleCard.js";
import Tags from "components/Tags/Tags.js";

import Gallery from "react-photo-gallery";
import styles from "assets/jss/page-sections/home-sections/articlesSectionStyle.js";

const useStyles = makeStyles(styles);

function useFetchArticles(params) {
  useEffect(() => {
    const isBottom = el => {
      return el.getBoundingClientRect().bottom <= window.innerHeight;
    };

    const handleScroll = e => {
      e.preventDefault();
      const wrappedElement = document.getElementById("gallery");
      if (!params.state && wrappedElement && isBottom(wrappedElement)) {
        params.handler(params.query);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [params.state]);

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

  return {
    data: allTags.slice(0, 20),
    onSelect: onSelect
  };
};

const ArticlesSection = props => {
  const classes = useStyles();

  const initStates = props.searchStates;
  const articleTags = useFilterTags(initStates.allTags);
  const showGallery = useShowGallery(false);

  useFetchArticles({
    handler: props.addArticles,
    query: {
      page: initStates.page,
      query: initStates.searchKey,
      lang: initStates.location
    },
    state: initStates.articles.loading
  });

  const articlesInfo = initStates.articles;
  const articlesData = articlesInfo.loading
    ? [...articlesInfo.list, ...articlesInfo.preloadList]
    : articlesInfo.list;

  return (
    <Card className={classes.boxedCard}>
      <Tags tags={articleTags} />
      {
        <div id="gallery">
          {showGallery && articlesData.length > 0 && (
            <Gallery
              photos={articlesData}
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
