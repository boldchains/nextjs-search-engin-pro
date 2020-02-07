import React from "react";

import { makeStyles } from "@material-ui/core";
import styles from "assets/jss/components/imageCardStyle.js";
import { PHOTO_STATIC_URL } from "utils/Consts.js";

const useStyles = makeStyles(styles);

const ImageCard = props => {
  const classes = useStyles();
  const imageUrl = PHOTO_STATIC_URL + props.images.publicid + ".jpg";

  const maxHeight = 142;
  let width,
    height = 0;
  if (props.images.imageheight != maxHeight) {
    const rate = maxHeight / props.images.imageheight;
    width = props.images.imagewidth * rate;
    height = maxHeight;
  }

  const linkUrl = `https://managerimages.vavel.com/details/${props._id}/${props.images.publicid}`;
  return props.images.publicid ? (
    <a href={linkUrl} target="_blank">
      <img
        className={classes.image}
        src={imageUrl}
        height={height}
        width={width}
      />
    </a>
  ) : (
    <div></div>
  );
};

export default ImageCard;
