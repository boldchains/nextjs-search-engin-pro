import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core";

import Tags, { fetchTags } from "components/Tags/Tags.js";
import ImagesSection from "./ImagesSection.js";
import VideosSection from "./VideosSection.js";
import { setCategoryTags } from "services/reducers/search/actions.js";

import styles from "assets/jss/page-sections/home-sections/categoriesSectionStyle.js";

const useStyles = makeStyles(styles);

const useFetchTags = () => {
  const tags = useSelector(state => state.searchStates.categoryTags);
  const searchKey = useSelector(state => state.searchStates.searchKey);
  const [isFetching, setIsFetching] = useState(false);

  const dispatch = useDispatch();

  const fetchHandler = async () => {
    setIsFetching(false);
    const fetchedData = await fetchTags();
    setIsFetching(true);

    dispatch(setCategoryTags(fetchedData));
  };

  useEffect(() => {
    searchKey && searchKey !== "" && fetchHandler();
  }, [searchKey]);

  const onSelect = index => {
    const clonedTags = [...tags];
    clonedTags &&
      clonedTags.map((item, idx) => {
        item.selected = idx === index;
      });

    clonedTags.shift();
    dispatch(setCategoryTags(clonedTags));
  };

  return {
    data: tags,
    onSelect: onSelect,
    isFetching: isFetching
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
