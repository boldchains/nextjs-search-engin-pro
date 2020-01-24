import React from 'react';

import { makeStyles } from '@material-ui/core';
import Card from 'components/Card/Card.js';
import Slider from "react-slick";
import ImageCard from 'components/ImageCard/ImageCard.js';

import styles from 'assets/jss/page-sections/home-sections/imagesSectionStyle.js'

const useStyles = makeStyles(styles);

const ImagesSection = (props) => {
    const classes = useStyles();

    const maxHeight = 120;
    const imageCards = props.images.map(image => {
        if (image.height != maxHeight) {
            const rate = maxHeight/image.height;
            image.width = image.width*rate;
            image.height = maxHeight;
        }
        return (
            <ImageCard info={image} key={image.id}/>
        );
    });

    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true
    };

    return (
        <Card className={ classes.boxedCard }>
            <div className={ classes.title }>Images</div>
            <div className={ classes.imagesBox }>
                <Slider {...settings}>
                    {imageCards}
                </Slider>
            </div>
        </Card>
    );
};

export default ImagesSection;