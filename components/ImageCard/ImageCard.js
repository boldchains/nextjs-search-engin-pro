import React from 'react';

import { makeStyles } from '@material-ui/core';
import styles from 'assets/jss/components/imageCardStyle.js';

const useStyles = makeStyles(styles);

const ImageCard = (props) => {
    const classes = useStyles();

    return (
        <div 
            className={classes.container} 
            style={{ 
                width: props.info.width,
                height: props.info.height,
                padding: "0px 2px"
            }}>
            <img className={classes.image} src={props.info.url}/>
        </div>
    );
};

export default ImageCard;