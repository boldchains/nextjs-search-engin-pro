import React from "react";

import { makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/page-sections/home-sections/videoDetailStyle.js";
const useStyles = makeStyles(styles);

const VideoDetail = props => {
  const classes = useStyles();
  const videoId = props.detail.id;
  const videoUrl = `https://youtu.be/${videoId}`;
  const factor = 3;

  return !props.detail.isLoading && videoId ? (
    <div className={classes.container}>
      <GridContainer spacing={6}>
        <GridItem xs={6} sm={6}>
          <div className={classes.playerWrapper}>
            <ReactPlayer
              url={videoUrl}
              fluid={false}
              width={`${factor * 16}vw`}
              height={`${factor * 9}vw`}
            />
          </div>
        </GridItem>
        <GridItem xs={6} sm={6}>
          <Button
            justIcon
            round
            color="transparent"
            style={{ float: "right" }}
            onClick={props.onDismiss}
          >
            <CloseRoundedIcon className={classes.closeButton} />
          </Button>
          <div>
            <h3 className={classes.videoTitle}>{props.detail.snippet.title}</h3>
            <p className={classes.description}>
              {props.detail.snippet.description}
            </p>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  ) : (
    <div></div>
  );
};

export default VideoDetail;
