import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core";

import Tags from "components/Tags/Tags.js";
import ImagesSection from "./ImagesSection.js";
import VideosSection from "./VideosSection.js";
import {
  setCategoryTags,
  setCategoryTag
} from "services/reducers/search/actions.js";

import styles from "assets/jss/page-sections/home-sections/categoriesSectionStyle.js";

const useStyles = makeStyles(styles);

const useFetchTags = () => {
  const allTags = useSelector(state => state.searchStates.allTags);
  const tags = useSelector(state => state.searchStates.categoryTags);
  const searchKey = useSelector(state => state.searchStates.searchKey);

  const dispatch = useDispatch();

  const searchHandler = () => {
    const filteredList = allTags.filter(function(item) {
      return item._id.toLowerCase().indexOf(searchKey) >= 0;
    });
    const tagList = allTags ? filteredList : [];
    dispatch(setCategoryTags(tagList));
  };

  useEffect(() => {
    searchKey && searchKey !== "" && searchHandler();
  }, [searchKey]);

  const onSelect = index => {
    const clonedTags = [...tags];
    clonedTags &&
      clonedTags.map((item, idx) => {
        item.selected = idx === index;
      });

    const selectedTag = clonedTags[index];
    if (selectedTag && selectedTag._id !== "All") {
      dispatch(setCategoryTag(selectedTag._id));
    }

    clonedTags.shift();
    dispatch(setCategoryTags(clonedTags));
  };

  return {
    data: tags,
    onSelect: onSelect
  };
};

const CategoriesSection = () => {
  const classes = useStyles();
  const categoryTags = useFetchTags();

  return (
    <div className={classes.container}>
      <Tags tags={categoryTags} />
      <VideosSection />
      <ImagesSection />
    </div>
  );
};

export default CategoriesSection;
