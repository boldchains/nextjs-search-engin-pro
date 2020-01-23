import React from 'react';

import { makeStyles } from "@material-ui/core";
import FilterButtons from 'components/FilterButtons/FilterButtons.js';
import ImagesSection from './ImagesSection.js';
import VideosSection from './VideosSection.js';

import Tags from './Tags.js';
import Videos from './Videos.js';
import Images from './Images.js';

import styles from 'assets/jss/page-sections/home-sections/typeFilterSectionStyle.js'

const useStyles = makeStyles(styles);

export default function TypeFilterSection() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <FilterButtons tags={Tags}/>
            <VideosSection videos={Videos}/>
            <ImagesSection images={Images}/>
        </div>
    );
};
