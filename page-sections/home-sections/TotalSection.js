import React from 'react';

import { makeStyles } from '@material-ui/core';
import Card from 'components/Card/Card.js';
import Gallery from 'react-photo-gallery';
import FilterButtons from 'components/FilterButtons/FilterButtons.js';

import styles from 'assets/jss/page-sections/home-sections/totalSectionStyle.js';

import Tags from './Tags';
import Images from './Images';

const useStyles = makeStyles(styles);

const TotalSection = () => {
    const classes = useStyles();

    const imageData = Images.map((image, index) => {
        return {
            key: index.toString(),
            src: image.url,
            width: image.width,
            height: image.height
        };
    });
    
    const BasicRows = () => <Gallery photos={imageData} columns={8} targetRowHeight={180}/>;

    return (
        <Card className={classes.boxedCard}>
            <FilterButtons tags={Tags}/>
            <div>
                <BasicRows/>
            </div>
        </Card>
    );
};

export default TotalSection;
