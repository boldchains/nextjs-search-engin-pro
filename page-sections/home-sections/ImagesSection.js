import React from "react";

import { makeStyles } from "@material-ui/core";

import Slider from "react-slick";
import Card from "components/Card/Card.js";
import ImageCard from "components/ImageCard/ImageCard.js";

import styles from "assets/jss/page-sections/home-sections/imagesSectionStyle.js";

const useStyles = makeStyles(styles);

const ImagesSection = props => {
  const classes = useStyles();
  const images = props.images;

  const imageCards =
    images &&
    images.map((image, index) => <ImageCard {...image} key={index} />);

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
      {images && images.length !== 0 && (
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
