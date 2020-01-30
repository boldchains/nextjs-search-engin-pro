import React from "react";

import { makeStyles } from "@material-ui/core";
import styles from "assets/jss/components/imageCardStyle.js";
import { PHOTO_STATIC_URL } from "utils/Consts.js";

const useStyles = makeStyles(styles);

const ImageCard = props => {
  const classes = useStyles();
  const imageUrl = PHOTO_STATIC_URL + props.info.imageid + ".jpg";

  return (
    <img
      className={classes.image}
      src={imageUrl}
      height={props.info.height}
      width={props.info.width}
    />
  );
};

export default ImageCard;
