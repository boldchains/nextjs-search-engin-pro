import React from 'react';

import { makeStyles } from '@material-ui/core';
import Card from 'components/Card/Card.js';
import Slider from "react-slick";
import VideoCard from 'components/VideoCard/VideoCard.js';

import styles from 'assets/jss/page-sections/home-sections/videosSectionStyle.js'

const useStyles = makeStyles(styles);

const VideosSection = (props) => {

    const classes = useStyles();

    const videoCards = props.videos.map(video => (
        <VideoCard info={video} key={video.id}/>
    ));
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true
    };

    return (
        <Card className={ classes.boxedCard }>
            <div className={ classes.title }>Videos</div>
            <div className={ classes.videoSlider }>
                <Slider {...settings}>
                    {videoCards}
                </Slider>
            </div>
        </Card>
    );
};

export default VideosSection;
