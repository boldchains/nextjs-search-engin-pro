import React from "react";

import { makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/components/videoCardStyle.js";

const useStyles = makeStyles(styles);

const VideoCard = props => {
  const classes = useStyles();

  const isLoaded = props.isLoaded;
  const thumbnail = props.info.snippet.thumbnails.medium;

  const onSelectVideo = (e, index) => {
    props.onSelect && props.onSelect(index);
  };

  return (
    <div className={classes.container}>
      <Card className={classes.videoCard}>
        <Button
          className={classes.button}
          color={props.selected && "primary"}
          onClick={event => onSelectVideo(event, props.index)}
        >
          <div className={classes.buttonContainer}>
            {isLoaded && thumbnail.url ? (
              <img className={classes.thumbnail} src={thumbnail.url} />
            ) : (
              <Skeleton variant="rect" width={"200px"} height={"120px"} />
            )}
            <div className={classes.description}>
              {isLoaded && props.info.snippet.title ? (
                <div className={classes.title}>{props.info.snippet.title}</div>
              ) : (
                <div className={classes.title}>
                  <Skeleton
                    className={classes.preloader}
                    variant="rect"
                    width={"100%"}
                    height={"10px"}
                  />
                  <Skeleton
                    className={classes.preloader}
                    variant="rect"
                    width={"100%"}
                    height={"10px"}
                  />
                  <Skeleton
                    className={classes.preloader}
                    variant="rect"
                    width={"80%"}
                    height={"10px"}
                  />
                </div>
              )}
              {isLoaded && props.info.views ? (
                <div className={classes.viewsCount}>{`${
                  props.info.views ? props.info.views : 0
                } views`}</div>
              ) : (
                <Skeleton
                  className={classes.preloader}
                  variant="rect"
                  width={"20%"}
                  height={"10px"}
                />
              )}
            </div>
          </div>
        </Button>
      </Card>
    </div>
  );
};

export default VideoCard;
