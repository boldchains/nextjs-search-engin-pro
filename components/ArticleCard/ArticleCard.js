import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

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

    const params = {
        url: photo.src,
        width: photo.width,
        height: photo.height*0.8
    };

    let resizedUrl = photo.src;
    if (photo.src && photo.src.startsWith('https')) {
        resizedUrl = getResizedImageUrl(params);
    }

    return !photo.state ? (
        <div key={index} style={{ margin, height: photo.height, width: photo.width }}>
            <div className="mask">
                <img src={resizedUrl} width={params.width} height={params.height}/>
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
    ) : (
        <div key={`loading-${index}`} style={{ margin, height: photo.height, width: photo.width }} >
            <Skeleton variant="rect" width={"100%"} height={"80%"} style={{ margin: "5px 0 0 5px" }} />
            <Skeleton variant="rect" width={"100%"} height={"5%"} style={{ margin: "5px 0 0 5px", borderRadius: "3px" }} />
            <Skeleton variant="rect" width={"80%"} height={"5%"} style={{ margin: "5px 0 0 5px", borderRadius: "3px" }} />
        </div>
    );
};

export default ArticleCard;