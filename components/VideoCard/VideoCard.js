import React from 'react';

import { makeStyles } from '@material-ui/core';

import styles from 'assets/jss/components/videoCardStyle.js';

const useStyles = makeStyles(styles);

const VideoCard = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <video className={classes.videoPlayer} controls autoPlay>
                <source src={props.info.url} type="video/mp4"/>
            </video>
            <div>
                <div className={classes.title}>{props.info.title}</div>
                <div className={classes.viewsCount}>{`${props.info.views} views`}</div>
            </div>
        </div>
    );
};

export default VideoCard;