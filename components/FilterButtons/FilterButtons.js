import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Slider from "react-slick";
import { makeStyles } from "@material-ui/core";

import Button from "components/CustomButtons/Button";

import { setTags, setIsFetching } from "services/reducers/tags/actions";

import styles from "assets/jss/components/filterButtonsStyle.js";
import { CORS_PROXY_URL, TAGS_API_URL } from "utils/Consts";

const useStyles = makeStyles(styles);

const fetchTags = async () => {
  const resp = await fetch(CORS_PROXY_URL + TAGS_API_URL);
  const tags = await resp.json();
  console.log(tags);
  return tags.listtags;
};

const useFetchTags = () => {
  const tags = useSelector(state => state.tags.data);
  const isFetching = useSelector(state => state.tags.isFetching);

  const dispatch = useDispatch();

  const fetchHandler = async () => {
    setIsFetching(false);
    const fetchedData = await fetchTags();
    fetchedData.unshift({ tagName: "All" });
    setIsFetching(true);

    dispatch(setTags(fetchedData));
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return {
    data: tags,
    isFetching: isFetching
  };
};

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

const FilterButtons = () => {
  const classes = useStyles();
  const tags = useFetchTags();

  console.log(tags.data);
  const buttons =
    tags.data &&
    tags.data.map(tag => (
      <div className={classes.button} key={tag._id}>
        <Button size="sm" color="white" round>
          <div className={classes.flexDiv}>
            <img
              className={classes.buttonIcon}
              src={tag.icon}
              style={{ display: !tag.icon && "none" }}
            />
            {tag.tagName}
          </div>
        </Button>
      </div>
    ));

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

export default FilterButtons;
