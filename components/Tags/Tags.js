import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core";

import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/components/tagsStyle.js";

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

const Tags = props => {
  const classes = useStyles();
  const tags = props.tags.data;

  const onSelectTag = (e, index) => {
    props.tags.onSelect && props.tags.onSelect(index);
  };

  const buttons =
    tags &&
    tags.map((tag, index) => {
      const tagId = tag._id ? tag._id : tag.tag;
      return (
        <div className={classes.button} key={tagId}>
          <Button
            size="sm"
            color={
              tagId === props.tags.selectedTag ||
              (tagId === "All" && !props.tags.selectedTag)
                ? "primary"
                : "white"
            }
            key={index}
            onClick={event => onSelectTag(event, index)}
            round
          >
            <div className={classes.flexDiv}>
              {tag.logo && (
                <img className={classes.buttonIcon} src={tag.logo} />
              )}
              {tagId}
            </div>
          </Button>
        </div>
      );
    });

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    slidesToScroll: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 10
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1
        }
      }
    ],
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className={classes.filterButtonsLayout}>
      <Slider {...settings}>{buttons}</Slider>
    </div>
  );
};

export default Tags;
