import React from "react";

import { makeStyles } from "@material-ui/core";

import Tags from "components/Tags/Tags.js";
import ImagesSection from "./ImagesSection.js";
import VideosSection from "./VideosSection.js";

import { COUNTRY_LIST } from "utils/Consts.js";

import styles from "assets/jss/page-sections/home-sections/categoriesSectionStyle.js";

const useStyles = makeStyles(styles);

const getTags = function({ list, query }) {
  let tags = [];
  let array = [];
  const country_filter = query.l ? query.l : "";

  list.forEach(photo => {
    if (photo.images.tags) {
      photo.images.tags = photo.images.tags.map(e => {
        e.country = (photo.albumcountry || "").toLowerCase();
        return e;
      });
      tags = tags.concat(photo.images.tags);
    }
  });

  tags.forEach(e => {
    if (array.find(a => a.tag === e.tag)) {
      array.find(a => a.tag === e.tag).count++;
      if (e.country)
        array.find(a => a.tag === e.tag).country.push(e.country.toLowerCase());
    } else {
      let json = {
        tag: e.tag,
        count: 1,
        country: [],
        class: query.tag === e.tag ? "active" : ""
      };
      if (e.country) json.country = [e.country.toLowerCase()];
      array.push(json);
    }
  });
  array = array.sort(function(a, b) {
    return a.count < b.count ? 1 : -1;
  });
  if (country_filter) {
    let paramcountry = country_filter.toLowerCase();
    let country = COUNTRY_LIST.find(function(e) {
      if (
        e.name.toLowerCase() === paramcountry ||
        e.alpha3code.toLowerCase() === paramcountry ||
        e.alpha2code.toLowerCase() === paramcountry
      ) {
        return e;
      }
    });
    if (country) {
      let after = [],
        before = [];
      array.forEach(e => {
        if (
          e.country.find(
            i =>
              i === country.name.toLowerCase() ||
              i === country.alpha3code.toLowerCase() ||
              i === country.alpha2code.toLowerCase()
          )
        ) {
          before.push(e);
        } else {
          after.push(e);
        }
      });
      array = before.concat(after);
    }
  }

  return array;
};

const CategoriesSection = props => {
  const classes = useStyles();

  const lastPhotos = props.searchStates.images;
  const query = props.router.query;
  const tags = getTags({ list: lastPhotos, query });

  return (
    <div className={classes.container}>
      <Tags tags={tags} />
      {/* <VideosSection /> */}
      <ImagesSection images={lastPhotos} />
    </div>
  );
};

export default CategoriesSection;
