import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core";
import Slider from "react-slick";
import Card from "components/Card/Card.js";
import VideoCard from "components/VideoCard/VideoCard.js";

// redux actions
import { setVideos } from "services/reducers/search/actions.js";

import styles from "assets/jss/page-sections/home-sections/videosSectionStyle.js";
import { VIDEOS_API_URL } from "utils/Consts.js";

const useStyles = makeStyles(styles);

async function fetchVideos(params) {
  const url = `${VIDEOS_API_URL}?part=snippet&q=${params.query}&maxResults=${params.count}&key=${process.env.apiKey}`;

  const response = await fetch(url);
  const jsonResponse = await response.json();
  return jsonResponse.items;
}

function useFetchVideos() {
  const videos = useSelector(state => state.searchStates.videos);
  const searchKey = useSelector(state => state.searchStates.searchKey);
  const [isFetching, setIsFetching] = useState(false);

  const dispatch = useDispatch();

  async function fetchVideosHandler() {
    const params = {
      query: searchKey,
      count: 20
    };

    setIsFetching(true);
    const fetchedData = await fetchVideos(params);
    setIsFetching(false);

    dispatch(setVideos(fetchedData));
  }

  useEffect(() => {
    fetchVideosHandler();
  }, [searchKey]);

  return {
    items: videos,
    isLoading: isFetching
  };
}

const VideosSection = () => {
  const classes = useStyles();
  const videos = useFetchVideos();

  const videoCards =
    videos.items &&
    videos.items.length !== 0 &&
    videos.items.map((video, index) => (
      <VideoCard info={video} key={index} isLoaded={!videos.isLoading} />
    ));

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    margin: 4,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true
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
