import React from 'react';

import Button from 'components/CustomButtons/Button.js';
import Slider from 'react-slick';

import {makeStyles} from '@material-ui/core';
import styles from "assets/jss/components/filterButtonsStyle.js";

const useStyles = makeStyles(styles);

const NextArrow = (props) => {
    const classes = useStyles();
    const { className, onClick } = props;
    return (
        <div
            className={className + " " + classes.nextArrow}
            onClick={onClick}
        />
    );
};
  
const PrevArrow = (props) => {
    const classes = useStyles();
    const { className, onClick } = props;
    return (
        <div
            className={className + " " + classes.prevArrow}
            onClick={onClick}
        />
    );
};

const FilterButtons = (props) => {
    const classes = useStyles();

    const buttons = props.tags.map(tag => (
        <Button size="sm" color="white" round key={tag.tagName} >
            <div className={classes.flexDiv}>
                <img className={classes.buttonIcon} src={tag.icon} style={{ display: !tag.icon&&"none"}}/>
                {tag.tagName}
            </div>
        </Button>
    ));

    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        slidesToScroll: 10,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 10
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true
                }
            }
        ],
        variableWidth: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className={classes.filterButtonsLayout}>
            <Slider {...settings}>
                {buttons}
            </Slider>
        </div>
    );
};

export default FilterButtons;
