import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addArticles } from 'services/reducers/articles/actions';

import { makeStyles } from '@material-ui/core';
import Card from 'components/Card/Card.js';
import ArticleCard from 'components/ArticleCard/ArticleCard.js';
import FilterButtons from 'components/FilterButtons/FilterButtons.js';

import Gallery from 'react-photo-gallery';
import styles from 'assets/jss/page-sections/home-sections/totalSectionStyle.js';

import failedImage from 'assets/img/fotografo.jpg';
import Tags from './Tags';

const useStyles = makeStyles(styles);

async function fetchArticles(params) {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    let url = `https://search.vavel.com/api/articles?l=${params.lang}&page=${params.page}`;
    if (params.query && params.query !== '') {
        url = url+`&q=${params.query}`;
    }

    const response = await fetch(proxyUrl+url);
    const jsonResponse = await response.json();
    return jsonResponse.articles;
}

function useFetchArticles() {
    const articles = useSelector(state => state.articles.data);
    const articlesPage = useSelector(state => state.articles.page);
    const searchKey = useSelector(state => state.articles.searchKey);
    const dispatch = useDispatch();

    const [isFetching, setIsFetching] = useState(true);
    const lang = useSelector(state => state.articles.lang);

    async function fetchArticlesHandler() {
        const fetchedData = await fetchArticles({
            page: articlesPage,
            query: searchKey,
            lang: lang
        });

        dispatch(addArticles(fetchedData));
        setIsFetching(false);
    }

    useEffect(() => {
        const isBottom = (el) => {
            return el.getBoundingClientRect().bottom <= window.innerHeight;
        }

        const handleScroll = (e) => {
            e.preventDefault();

            const wrappedElement = document.getElementById('gallery');
            if (wrappedElement && isBottom(wrappedElement)) {
                fetchArticlesHandler();
                window.removeEventListener('scroll', handleScroll);
            }
        }
        window.addEventListener("scroll", handleScroll, false);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [articles]);

    useEffect(() => {
        fetchArticlesHandler();
    }, [searchKey]);

    return {
        data: articles,
        isFetching: isFetching,
    }
}

function useShowGallery(initialState) {
    const [showGallery, setShowGalley] = useState(initialState);

    useEffect(() => { 
        setShowGalley(true); 
    }, []);

    return showGallery;
}

const TotalSection = () => {
    const classes = useStyles();

    const articles = useFetchArticles();
    const showGallery = useShowGallery(false);

    let imageData = articles.data.map((image, index) => {
        return {
            key: index.toString(),
            src: image.image.url?image.image.url:process.env.host+failedImage,
            photo: image,
            width: 4,
            height: 3
        };
    });

    return (
        <Card className={classes.boxedCard}>
            <FilterButtons tags={Tags}/>
            <div id="gallery">
                {
                    showGallery && <Gallery photos={imageData} columns={5} renderImage={ArticleCard} />
                }
            </div>
            <div>
                { 
                    articles.isFetching && 
                    <div className={classes.loading}>
                        Loading...
                    </div>
                }
            </div>
        </Card>
    );
};

export default TotalSection;
