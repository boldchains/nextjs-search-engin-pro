import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core";

import Slider from "react-slick";
import Card from "components/Card/Card.js";
import ImageCard from "components/ImageCard/ImageCard.js";

import { setImages } from "services/reducers/search/actions.js";

import styles from "assets/jss/page-sections/home-sections/imagesSectionStyle.js";
import { CORS_PROXY_URL, IMAGES_API_URL } from "utils/Consts.js";

const useStyles = makeStyles(styles);

const fetchImages = async params => {
  const url = `${IMAGES_API_URL}?keyword=${params.query}&page=1&fields=${params.fields}`;

  const resp = await fetch(CORS_PROXY_URL + url);
  const images = await resp.json();

  return images;
};

const useFetchImages = () => {
  const images = useSelector(state => state.searchStates.images);
  const searchKey = useSelector(state => state.searchStates.searchKey);
  const [isFetching, setIsFetching] = useState(false);

  const dispatch = useDispatch();

  const fetchHandler = async () => {
    const params = {
      query: searchKey,
      fields: "_id,images"
    };

    setIsFetching(true);
    const fetchedData = await fetchImages(params);
    setIsFetching(false);

    dispatch(setImages(fetchedData));
  };

  useEffect(() => {
    fetchHandler();
  }, [searchKey]);

  return {
    data: images,
    isFetching: isFetching
  };
};

const ImagesSection = () => {
  const classes = useStyles();
  const images = useFetchImages();

  const maxHeight = 120;
  const imageCards =
    images.data &&
    images.data.map(image => {
      if (image.height != maxHeight) {
        const rate = maxHeight / image.height;
        image.width = image.width * rate;
        image.height = maxHeight;
      }
      return <ImageCard info={image} key={image.id} />;
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
