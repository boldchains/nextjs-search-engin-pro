import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core';
import Card from 'components/Card/Card.js';
import DurationConverter from 'utils/DurationConverter.js';

import styles from 'assets/jss/components/videoCardStyle.js';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(styles);

const useFetchVideoDetails = (videoId) => {
    const [video, setVideo] = useState();

    async function fetchVideohandler() {
        const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails,statistics&key=${process.env.apiKey}`;
        const rep = await fetch(url);
        const videoDetail = await rep.json();

        // const videoInfo = videoDetail.items[0];
        console.log(videoDetail.items);

    }

    useEffect(() => {
        fetchVideohandler();
    }, []);

    return video;
}

const VideoCard = (props) => {

    const classes = useStyles();
    const video = useFetchVideoDetails(props.info.id.videoId);
    const [pageLoaded, setPageLoaded] = useState(false);

    const videoUrl = `https://www.youtube.com/embed/${props.info.id.videoId}?showinfo=0&enablejsapi=1&origin=${process.env.host}`;

    useEffect(() => {
        setPageLoaded(true);
    }, [])

    const thumbnail = props.info.snippet.thumbnails.medium;

    return (
        <div className={classes.container}>
            {
                pageLoaded?(
                    <Card className={classes.videoCard}>
                        <img src={thumbnail.url} width={"100%"} />
                        <div className={ classes.description }>
                            <div className={classes.title}>{props.info.snippet.title}</div>
                            <div className={classes.viewsCount}>{`${props.info.views?props.info.views:0} views`}</div>
                        </div>
                    </Card>
                ):(
                    <div className={ classes.loaderItem }>
                        <Skeleton variant="rect" width={"100%"} height={"65%"} style={{ margin: "5px 0 0 5px" }} />
                        <Skeleton variant="rect" width={"100%"} height={"5%"} style={{ margin: "10px 0 0 5px", borderRadius: "3px" }} />
                        <Skeleton variant="rect" width={"100%"} height={"5%"} style={{ margin: "5px 0 0 5px", borderRadius: "3px" }} />
                        <Skeleton variant="rect" width={"80%"} height={"5%"} style={{ margin: "5px 0 0 5px", borderRadius: "3px" }} />
                        <Skeleton variant="rect" width={"20%"} height={"5%"} style={{ margin: "10px 0 0 5px", borderRadius: "3px" }} />
                    </div>
                )
            }
        </div>
    );
};

export default VideoCard;