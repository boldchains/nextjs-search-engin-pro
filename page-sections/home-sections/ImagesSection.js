import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core';

import Slider from "react-slick";
import Card from 'components/Card/Card.js';
import ImageCard from 'components/ImageCard/ImageCard.js';

import { setImages, setIsFetching } from 'services/reducers/images/actions';

import styles from 'assets/jss/page-sections/home-sections/imagesSectionStyle.js'

const useStyles = makeStyles(styles);

const fetchImages = (params) => {
    const url = `https://managerimages.vavel.com/api/album/getlastphotos?page=1&limit=15&fields=_id,images`
}

const useFetchImages = () => {
    const images = useSelector( state => state.images.data );
    const searchKey = useSelector ( state => state.images.searchKey );
    const isFetching = useSelector ( state => state.images.isFetching );

    const dispatch = useDispatch();

    const fetchHandler = async () => {

        const params = {
            query: searchKey,
            fields: '_id,images'
        }
        
        setIsFetching(true);
        const fetchedData = await fetchImages(params);
        setIsFetching(false);

        dispatch(setImages(fetchedData));
    }

    useEffect(() => {
        fetchHandler();
    }, [searchKey])

    return {
        data: images,
        isFetching: isFetching
    }
}

const ImagesSection = (props) => {
    const classes = useStyles();
    const images = useFetchImages();

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