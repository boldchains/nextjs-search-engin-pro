import React from 'react';

const getResizedImageUrl = (props) => {
    const resizeImageProxy = `/cdn-cgi/image/width=${props.width},height=${props.height}`;
    const position = props.url.indexOf('/', 8);
    const resizedPhotoUrl = [props.url.slice(0, position), resizeImageProxy, props.url.slice(position)].join('');

    return resizedPhotoUrl;
}

const ArticleCard = ({
    index,
    margin,
    photo
}) => {

    let resizedUrl = photo.src;
    if (photo.src && photo.src.startsWith('https')) {
        const params = {
            url: photo.src,
            width: photo.width,
            height: photo.height
        }
        resizedUrl = getResizedImageUrl(params);
    }

    return (
        <div key={index} style={{ margin, height: photo.height, width: photo.width }}>
            <div className="mask">
                <img src={resizedUrl} width={photo.width} height={"80%"}/>
                <div className="article-title">
                    {photo.photo.title}
                </div>
            </div>
            <style jsx>{`
                .mask {
                    width: 100%;
                    height: 100%;
                }
                .mask:hover {
                    opacity: 0.5;
                }
                .article-title {
                    font-weight: 700;
                    color: #000000;
                    padding: 5px;
                }
            `}</style>
        </div>
    );
};

export default ArticleCard;