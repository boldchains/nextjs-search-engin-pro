import React from 'react';

import { makeStyles } from '@material-ui/core';
import ReactPlayer from 'react-player';

import styles from 'assets/jss/components/videoCardStyle.js';

const useStyles = makeStyles(styles);

const VideoCard = (props) => {

    console.log("video info:", `https://youtu.be/${props.info.id.videoId}`);
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <ReactPlayer className={classes.videoPlayer} width={129} height={172} url={`https://youtu.be/${props.info.id.videoId}`} controls autoPlay/>
            <div>
                <div className={classes.title}>{props.info.snippet.title}</div>
                <div className={classes.viewsCount}>{`${props.info.views?props.info.views:0} views`}</div>
            </div>
        </div>
    );
};

export default VideoCard;