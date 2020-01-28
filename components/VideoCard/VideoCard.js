import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core';
import Card from 'components/Card/Card.js';
import ReactPlayer from 'react-player';

import styles from 'assets/jss/components/videoCardStyle.js';

const useStyles = makeStyles(styles);

const VideoCard = (props) => {

    const classes = useStyles();
    const [pageLoaded, setPageLoaded] = useState(false);

    const videoUrl = `https://www.youtube.com/embed/${props.info.id.videoId}?showinfo=0&enablejsapi=1&origin=${process.env.host}`;
    console.log(props.info);

    useEffect(() => {
        setPageLoaded(true);
    }, [])

    const thumbnail = props.info.snippet.thumbnails.medium;

    return (
        <div className={classes.container}>
            <Card className={classes.videoCard}>
                { 
                    pageLoaded&&
                    <img src={thumbnail.url} width={"100%"} />
                }
                <div className={ classes.description }>
                    <div className={classes.title}>{props.info.snippet.title}</div>
                    <div className={classes.viewsCount}>{`${props.info.views?props.info.views:0} views`}</div>
                </div>
            </Card>
        </div>
    );
};

export default VideoCard;