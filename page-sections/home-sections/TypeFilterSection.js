import React from "react";

import { makeStyles } from "@material-ui/core";
import FilterButtons from "components/FilterButtons/FilterButtons.js";
import ImagesSection from "./ImagesSection.js";
import VideosSection from "./VideosSection.js";

import styles from "assets/jss/page-sections/home-sections/typeFilterSectionStyle.js";

const useStyles = makeStyles(styles);

export default function TypeFilterSection() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <FilterButtons />
      <VideosSection />
      <ImagesSection />
    </div>
  );
}
