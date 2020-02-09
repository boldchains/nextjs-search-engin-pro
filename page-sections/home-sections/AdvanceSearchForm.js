import React, { useState } from "react";
import {
  makeStyles,
  withStyles,
  FormControl,
  Select,
  MenuItem,
  InputBase,
  InputLabel
} from "@material-ui/core";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/page-sections/home-sections/advanceSearchFormStyle.js";

const useStyles = makeStyles(styles);

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const AdvanceSearchForm = props => {
  const classes = useStyles();
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");
  const [language, setLanguage] = useState("");
  const [region, setRegion] = useState("");

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  const categories = [
    { title: "Salud" },
    { title: "Deporte" },
    { title: "Gente" },
    { title: "Economía" },
    { title: "General" },
    { title: "Mundo" },
    { title: "Entretenimiento" },
    { title: "Ciencia" },
    { title: "Tecnología" }
  ];

  const dateRanges = [
    { title: "A week ago" },
    { title: "24 hours ago" },
    { title: "Custom interval" }
  ];

  const languages = [
    { lang: "Any of them" },
    { lang: "[es] Español" },
    { lang: "[ar] Arabic" },
    { lang: "[ca] Català" },
    { lang: "[zh] Chinese" },
    { lang: "[nl] Dutch" },
    { lang: "[en] English" },
    { lang: "[fr] French" },
    { lang: "[de] German" },
    { lang: "[el] Greek" },
    { lang: "[he] Hebrew" },
    { lang: "[id] Indonesian" },
    { lang: "[it] Italiano" },
    { lang: "[ja] Japan" },
    { lang: "[pl] Polish" },
    { lang: "[pt] Portuguese" },
    { lang: "[ru] Russian" },
    { lang: "[th] Thai" },
    { lang: "[tr] Turkish" }
  ];

  return (
    <div className={classes.container}>
      <form autoComplete="off">
        <GridContainer spacing={10}>
          <GridItem className={classes.nonePadding} xs={4} sm={4}>
            <FormControl className={classes.keywordInput}>
              <InputLabel>Keywords</InputLabel>
              <BootstrapInput />
            </FormControl>
          </GridItem>
          <GridItem className={classes.nonePadding} xs={8} sm={8} />
          <GridItem className={classes.nonePadding} xs={4} sm={4}>
            <FormControl className={classes.categoryInput}>
              <InputLabel>Category</InputLabel>
              <Select
                value={keyword}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem value="">All Categories</MenuItem>
                {categories.map((category, index) => (
                  <MenuItem value={category.title} key={index}>
                    {category.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </GridItem>
          <GridItem className={classes.nonePadding} xs={8} sm={8} />
          <GridItem className={classes.nonePadding} xs={4} sm={4}>
            <FormControl className={classes.sourceInput}>
              <InputLabel>Source</InputLabel>
              <BootstrapInput />
            </FormControl>
          </GridItem>
          <GridItem className={classes.nonePadding} xs={8} sm={8} />
          <GridItem className={classes.nonePadding} xs={4} sm={4}>
            <FormControl className={classes.dateRangeInput}>
              <InputLabel>Date</InputLabel>
              <Select
                value={""}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem value={0}></MenuItem>
                {dateRanges.map((dateRange, index) => (
                  <MenuItem value={dateRange.id} key={index}>
                    {dateRange.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </GridItem>
          <GridItem className={classes.nonePadding} xs={8} sm={8} />
          <GridItem className={classes.nonePadding} xs={4} sm={4}>
            <FormControl className={classes.languageInput}>
              <InputLabel>Language</InputLabel>
              <Select
                value={keyword}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                {languages.map((language, index) => (
                  <MenuItem value={index} key={index}>
                    {language.lang}
                  </MenuItem>
                ))}
              </Select>
              <a>add region</a>
            </FormControl>
          </GridItem>
        </GridContainer>
      </form>
    </div>
  );
};
export default AdvanceSearchForm;
