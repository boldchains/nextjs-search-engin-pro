import React from 'react';

import { makeStyles } from '@material-ui/core';
import styles from 'assets/jss/components/imageCardStyle.js';

const useStyles = makeStyles(styles);

const ImageCard = (props) => {
    const classes = useStyles();

    return (
        <img className={classes.image} src={props.info.url} height={props.info.height} width={props.info.width}/>
    );
};

export default ImageCard;