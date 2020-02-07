import React from "react";

import { makeStyles } from "@material-ui/core";
import Slider from "react-slick";
import Card from "components/Card/Card.js";
import VideoCard from "components/VideoCard/VideoCard.js";

import styles from "assets/jss/page-sections/home-sections/videosSectionStyle.js";

const useStyles = makeStyles(styles);

const NextArrow = props => {
  const classes = useStyles();
  const { className, onClick } = props;
  return (
    <div className={className + " " + classes.nextArrow} onClick={onClick} />
  );
};

const PrevArrow = props => {
  const classes = useStyles();
  const { className, onClick } = props;

  return (
    <div className={className + " " + classes.prevArrow} onClick={onClick} />
  );
};

const VideosSection = props => {
  const classes = useStyles();
  const videos = props.videos;

  const onSelect = index => {};

  const videoCards =
    videos &&
    videos !== 0 &&
    videos.map((video, index) => {
      const videoProps = {
        index: index,
        key: index,
        onSelect: onSelect,
        info: video,
        isLoaded: true
      };
      return <VideoCard {...videoProps} />;
    });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    margin: 4,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div>
      {videoCards && (
        <Card className={classes.boxedCard}>
          <div className={classes.title}>Videos</div>
          <div className={classes.videoSlider}>
            <Slider {...settings}>{videoCards}</Slider>
          </div>
        </Card>
      )}
    </div>
  );
};

export default VideosSection;
