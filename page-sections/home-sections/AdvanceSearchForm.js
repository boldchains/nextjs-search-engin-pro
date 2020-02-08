import React from "react";

import { makeStyles } from "@material-ui/core";
import styles from "assets/jss/page-sections/home-sections/videoDetailStyle.js";
const useStyles = makeStyles(styles);

const AdvanceSearchForm = props => {
  const classes = useStyles();
  return <div className={classes.container}>advanced search form</div>;
};
export default AdvanceSearchForm;
