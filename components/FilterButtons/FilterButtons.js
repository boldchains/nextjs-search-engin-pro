import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Slider from "react-slick";
import { makeStyles } from "@material-ui/core";

import Button from "components/CustomButtons/Button";

import { setTags } from "services/reducers/search/actions";

import styles from "assets/jss/components/filterButtonsStyle.js";
import { CORS_PROXY_URL, TAGS_API_URL, PHOTO_STATIC_URL } from "utils/Consts";

const useStyles = makeStyles(styles);

const fetchTags = async () => {
  const resp = await fetch(CORS_PROXY_URL + TAGS_API_URL);
  const tags = await resp.json();

  tags.listtags = tags.listtags || [];
  tags.listtags = tags.listtags.map(item => {
    if (item.tag && item.tag.logo) item.logo = PHOTO_STATIC_URL + item.tag.logo;
    else {
      let find = item.list_tags.find(i => i.logo);
      if (find) {
        item.logo = PHOTO_STATIC_URL + find.logo;
      }
    }
    return item;
  });

  return tags.listtags.slice(0, 20);
};

const useFetchTags = () => {
  const tags = useSelector(state => state.searchStates.tags);
  const [isFetching, setIsFetching] = useState(false);

  const dispatch = useDispatch();

  const fetchHandler = async () => {
    setIsFetching(false);
    const fetchedData = await fetchTags();
    fetchedData.unshift({ _id: "All" });
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

  const onSelectTag = (e, index) => {};
  const buttons = tags.data.map((tag, index) => (
    <div className={classes.button}>
      <Button
        size="sm"
        color={tag.selected ? "primary" : "white"}
        key={index}
        onClick={event => onSelectTag(event, index)}
        round
      >
        <div className={classes.flexDiv}>
          {tag.logo && <img className={classes.buttonIcon} src={tag.logo} />}
          {tag._id}
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
