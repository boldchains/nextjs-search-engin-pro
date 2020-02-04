import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core";

import Slider from "react-slick";
import Card from "components/Card/Card.js";
import ImageCard from "components/ImageCard/ImageCard.js";

import { getImages } from "services/reducers/search/actions.js";

import styles from "assets/jss/page-sections/home-sections/imagesSectionStyle.js";

const useStyles = makeStyles(styles);

const useFetchImages = () => {
  const categoryTags = useSelector(state => state.searchStates.categoryTags);
  const images = useSelector(state => state.searchStates.images);
  const searchKey = useSelector(state => state.searchStates.searchKey);
  const selectedCTag = useSelector(state => state.searchStates.selectedCTag);

  const dispatch = useDispatch();

  const searchHandler = () => {
    const keyword =
      selectedCTag && selectedCTag !== "" ? selectedCTag : searchKey;
    const findTags = categoryTags.find(item => {
      return (
        item._id.toLowerCase().indexOf(keyword && keyword.toLowerCase()) >= 0
      );
    });

    if (findTags && findTags.list_tags) {
      const tagImages = findTags.list_tags.slice(0, 20);
      dispatch(getImages(tagImages));
    }
  };

  useEffect(() => {
    searchHandler();
  }, [searchKey, selectedCTag]);

  return {
    data: images
  };
};

const ImagesSection = () => {
  const classes = useStyles();
  const images = useFetchImages();

  const maxHeight = 120;
  const imageCards =
    images.data &&
    images.data.map((image, index) => {
      if (image.height != maxHeight) {
        const rate = maxHeight / image.height;
        image.width = image.width * rate;
        image.height = maxHeight;
      }
      return <ImageCard info={image} key={index} />;
    });

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true
  };

  return (
    <div>
      {images.data && images.data.length !== 0 && (
        <Card className={classes.boxedCard}>
          <div className={classes.title}>Images</div>
          <div className={classes.imagesBox}>
            <Slider {...settings}>{imageCards}</Slider>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ImagesSection;
